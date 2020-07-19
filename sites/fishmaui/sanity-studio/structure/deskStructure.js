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

import {
  GiFishingBoat,
  GiHamburgerMenu
} from 'react-icons/gi'

import {
  RiArticleLine
} from 'react-icons/ri'

import{
  BsQuestion
} from 'react-icons/bs'

const hiddenDocTypes = listItem =>
  ![
    'menu',
    'landingPage',
    'page',
    'service',
    'review',
    'teamMember',
    'faq',
    'boat',
    'post',
    'boatType',
    'siteSettings',
    'globalOptions'
    
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
        .child(
          S.documentTypeList('menu')
        ),
        S.listItem()
        .title('Boat Types')
        .icon(GiFishingBoat)
        .child(
          S.documentTypeList('boatType')
        ),
      ])
    ),
    S.listItem()
    .title('General Pages')
    .icon(MdViewStream)
    .child(
      S.list()
      .title('General Pages')
      .items([
        S.listItem()
        .title('Homepage')
        .icon(MdHome)
        .child(
          S.document()
          .title('Homepage')
          .schemaType('landingPage')
          .documentId('homepage')
        ),
        S.listItem()
        .title('About Page')
        .icon(MdBusiness)
        .child(
          S.document()
          .title('About Page')
          .schemaType('page')
          .documentId('profilePage')
        ),
        S.listItem()
        .title('Contact Page')
        .icon(MdMail)
        .child(
          S.document()
          .title('Contact Page')
          .schemaType('page')
          .documentId('contactPage')
        ),
        S.listItem()
        .title('Other Pages')
        .icon(MdExplore)
        .child(
          S.documentTypeList('page')
          .filter('_type == "page" && _id != "contactPage" &&  _id != "profilePage"')
        ),
      ])
    ),
    S.listItem()
    .title('Boats')
    .icon(GiFishingBoat)
    .child(
      S.documentTypeList('boat')
    ),
    S.listItem()
    .title('Reviews')
    .icon(MdThumbUp)
    .child(
      S.documentTypeList('review')
    ),
    S.listItem()
    .title('FAQs')
    .icon(BsQuestion)
    .child(
      S.documentTypeList('faq')
    ),
    S.listItem()
    .title('Blog Posts')
    .icon(RiArticleLine)
    .child(
      S.documentTypeList('post')
    ),
    ...S.documentTypeListItems().filter(hiddenDocTypes),
  ])
