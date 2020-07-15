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

const hiddenDocTypes = listItem =>
  ![
    'menu',
    'landingPage',
    'page',
    'service',
    'testimonial',
    'teamMember',
    'faq'
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
        .title('Menus')
        .child(
          S.documentTypeList('menu')
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
        .title('Profile Page')
        .icon(MdBusiness)
        .child(
          S.document()
          .title('Profile Page')
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
        )
      ])
    ),
    S.listItem()
    .title('Boats')
    .icon(MdThumbUp)
    .child(
      S.documentTypeList('boat')
    ),
    S.listItem()
    .title('Testimonials')
    .icon(MdThumbUp)
    .child(
      S.documentTypeList('testimonial')
    ),
    S.listItem()
    .title('FAQs')
    .child(
      S.documentTypeList('faq')
    ),
    ...S.documentTypeListItems().filter(hiddenDocTypes),
  ])
