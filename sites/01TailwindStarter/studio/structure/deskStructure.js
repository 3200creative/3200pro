import S from '@sanity/desk-tool/structure-builder'
import {
  MdSettings,
  MdInfo,
  MdHome,
  MdBusiness,
  MdMail,
  MdExplore,
  MdViewStream,
  MdThumbUp,
  MdWeb,
} from 'react-icons/md'

import { GiFishingBoat, GiHamburgerMenu } from 'react-icons/gi'

import { FaWpforms } from 'react-icons/fa'

import {
  RiArticleLine,
  RiTeamFill,
  RiLayoutBottom2Fill,
  RiRouteFill,
} from 'react-icons/ri'

import { GrTree, GrServices } from 'react-icons/gr'

import {
  BsQuestion,
  BsFillPersonLinesFill,
  BsPersonBoundingBox,
} from 'react-icons/bs'

const hiddenDocTypes = (listItem) =>
  ![
    'menu',
    'page',
    'post',
    'siteSettings',
    'globalOptions',
    'route',
    'footerSection',
    'footer',
    'jotform',
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Website Content')
    .items([
      S.listItem()
        .title('Site Controls')
        .icon(MdSettings)
        .child(
          S.list()
            .title('Site Settings')
            .items([
              S.listItem()
                .title('Metadata')
                .icon(MdInfo)
                .child(
                  S.document()
                    .title('Metadata')
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
                ),
              S.listItem()
                .title('globalOptions')
                .icon(MdInfo)
                .child(
                  S.document()
                    .title('Global Options')
                    .schemaType('globalOptions')
                    .documentId('globalOptions')
                ),
              S.listItem()
                .title('Menus')
                .icon(GiHamburgerMenu)
                .child(S.documentTypeList('menu')),
              S.listItem()
                .title('Forms')
                .icon(FaWpforms)
                .child(S.documentTypeList('jotform')),
              S.listItem()
                .title('Page Routes')
                .icon(RiRouteFill)
                .child(S.documentTypeList('route')),
              S.listItem()
                .title('Footer')
                .icon(RiLayoutBottom2Fill)
                .child(
                  S.document()
                    .title('Footer')
                    .schemaType('footer')
                    .documentId('footer')
                ),
            ])
        ),
      S.listItem()
        .title('Homepage')
        .icon(MdHome)
        .child(
          S.document()
            .title('Homepage')
            .schemaType('page')
            .documentId('homepage')
        ),
      S.listItem()
        .title('Pages')
        .icon(RiArticleLine)
        .child(S.documentTypeList('page')),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
      S.listItem()
        .title('Blog Posts')
        .icon(RiArticleLine)
        .child(S.documentTypeList('post')),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
