import React from 'react'
import SanityArray from '@sanity/form-builder/lib/sanity/inputs/SanityArrayInput'
import WithDocument from '@sanity/form-builder/lib/utils/withDocument'
import client from 'part:@sanity/base/client'
import { nanoid } from 'nanoid'
import DefaultButton from 'part:@sanity/components/buttons/default'
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event'
import DefaultTextInput from 'part:@sanity/components/textinputs/default'
import styles from './RandomList.css'

// todo - fix initial state
// todo - fix random query

const createPatchFrom = (value) =>
  PatchEvent.from(value === '' ? unset() : set(value))

class RandomList extends React.Component {
  state = { count: 0 }

  arrayRef = null

  constructor(props) {
    super()
    this.state = { count: props?.type?.options?.defaultCount || 5 }
  }

  focus() {
    this.arrayRef && this.arrayRef.focus()
  }

  setRef = (ref) => {
    this.arrayRef = ref
  }

  randomize = async () => {
    const { document, type } = this.props
    const id = document._id?.replace('drafts.', '')

    let data = await client.fetch(
      `*[_type == '${
        type.of[0].to[0].name
      }' && !(_id in path('drafts.**')) && _id!='${id}'][0..80] {
        ...,
        "randomSort":random % ${Math.round(Math.random() * 1000000)}
      }  | order(randomSort ${Math.random() < 0.5 ? 'asc' : 'desc'}) `,
      {}
    )

    if (type.options.resolve) {
      data = await type.options.resolve(data, document, client)
    }

    const list = data.map((v) => ({
      _key: nanoid(),
      _ref: v._id,
      _type: 'reference',
      rand: Math.random(),
    }))

    list.sort((a, b) => {
      if (a.rand > b.rand) {
        return -1
      }
      return 1
    })

    const count = Math.max(0, this.state.count)
    const clean = list.slice(0, count).map(({ rand, ...v }) => v)

    this.props.onChange(createPatchFrom(clean))
  }

  componentDidMount() {
    // when document is created
    if (this.props.value === undefined) {
      this.randomize()
    }
  }

  onCountChange = (e) => {
    this.setState({ count: e.target.value })
  }

  render() {
    const { props } = this

    return (
      <div>
        <SanityArray ref={this.setRef} {...props} />
        <div className={styles.block}>
          <div className={styles.countBlock}>
            <DefaultTextInput
              type="number"
              onChange={this.onCountChange}
              placeholder="Count"
              value={this.state.count}
            />
          </div>
          <div className={styles.buttonBlock}>
            <DefaultButton color="secondary" onClick={this.randomize}>
              Randomize
            </DefaultButton>
          </div>
        </div>
      </div>
    )
  }
}

export default WithDocument(RandomList)
