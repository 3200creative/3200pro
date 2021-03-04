/* eslint-disable */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Typography, Grid } from '@material-ui/core'
import { StaticQuery, graphql } from 'gatsby'
import React from 'react'

class MailChimpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { email: '', firstName: '', result: null }
  }
  render() {
    const handleSubmit = (e) => {
      e.preventDefault()
      const result = addToMailchimp(this.state.email, {
        FNAME: this.state.firstName,
      }).then((data) => {
        if (data.result === 'success') {
          this.setState({ result: 'success' })
          return
        }
        if (data.result === 'error') {
          this.setState({ result: 'error' })
        }
      })
    }
  
    const handleChange = (event) => {
      this.setState({ email: event.target.value })
    }
  
    const handleNameChange = (event) => {
      this.setState({ firstName: event.target.value })
    }
    const { data } = this.props
    const confirmMessage =
      data.sanityNewsletterSignup.mailchimpSignupConfirmation
    const errorMessage = data.sanityNewsletterSignup.mailchimpSignupError
    const heading = data.sanityNewsletterSignup.headline
    const { subheading } = data.sanityNewsletterSignup
    return this.state.result === 'success' ? (
      <div>{confirmMessage}</div>
    ) : this.state.result === 'error' ? (
      <div>{errorMessage}</div>
    ) : (
      <div
        sx={{
          variant: 'variants.newsletter',
        }}
      >
        <div
          sx={{
            maxWidth: '100%',
            width: '700px',
            margin: '0 auto',
          }}
        >
          <h2
            sx={{
              my: 0,
            }}
          >
            {heading}
          </h2>
          <p>{subheading}</p>
          <form
            onSubmit={this.handleSubmit}
            sx={{
              width: '100%',
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={5}>
                <TextField
                  id="outlined-email-input"
                  label="First Name"
                  type="text"
                  name="firstName"
                  autoComplete="First Name"
                  variant="outlined"
                  onChange={this.handleNameChange}
                  sx={{
                    backgroundColor: 'newsletter.fields.background',
                    width: '100%',
                  }}
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <TextField
                  id="outlined-email-input"
                  label="Email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  variant="outlined"
                  onChange={this.handleChange}
                  sx={{
                    backgroundColor: 'newsletter.fields.background',
                    width: '100%',
                  }}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <Button
                  variant="contained"
                  color="#333333"
                  label="Submit"
                  type="submit"
                  sx={{
                    height: '54px',
                    width: '100%',
                  }}
                >
                  <Typography variant="button">Subscribe</Typography>
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    )
  }
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        sanityNewsletterSignup {
          mailchimpSignupConfirmation
          mailchimpSignupError
          headline
          subheading
          _id
        }
      }
    `}
    render={(data) => <MailChimpForm data={data} {...props} />}
  />
)
