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
  FaGavel,
  FaQuestion
} from 'react-icons/fa'

import {
  GrResources,
  GrGatsbyjs
} from 'react-icons/gr'

import {
  GiScales,
  GiDamagedHouse
} from 'react-icons/gi'
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
        .icon(GrResources)
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
    .title('Services')
    .icon(FaGavel)
    .child(
      S.list()
      .title('Services')
      .items([
        S.listItem()
        .title('Gatsby Development')
        .icon(GrGatsbyjs)
        .child(
          S.list()
          .title('Landing Page')
          .items([
            S.listItem()
            .title('Landing Page')
            .icon(MdWeb)
            .child(
              S.document()
              .title('Landing Page')
              .schemaType('landingPage')
              .documentId('ssdLandingPage')
            ),
            S.listItem()
            .title('Service Details')
            .icon(MdBusiness)
            .child(
              S.document()
              .title('Service Details')
              .schemaType('page')
              .documentId('gatsbyServiceDetails')
            ),
            S.listItem()
            .title('Contact Page')
            .icon(MdMail)
            .child(
              S.document()
              .title('Contact Page')
              .schemaType('page')
              .documentId('ssdContactPage')
            ),
          ])
        )
        ]
      )
    ),
    S.listItem()
    .title('Testimonials')
    .icon(MdThumbUp)
    .child(
      S.documentTypeList('testimonial')
    ),
    S.listItem()
    .title('Snippets')
    .icon(FaQuestion)
    .child(
      S.documentTypeList('faq')
    ),
    ...S.documentTypeListItems().filter(hiddenDocTypes),
  ])
