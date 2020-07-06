import S from '@sanity/desk-tool/structure-builder'
import {
  MdSettings,
  MdInfo,
  MdHome,
  MdFormatAlignJustify,
  MdBusiness,
  MdMail,
  MdPhotoAlbum,
  MdCollections,
  MdRoomService,
  MdHealing,
  MdExplore,
  MdFace,
  MdViewStream,
  MdThumbUp,
  MdWeb,
  MdPeople
} from 'react-icons/md'

import {
  RiArticleLine,
  RiServiceLine,
} from 'react-icons/ri'

import {
  FaPeopleCarry,
  FaGavel,
  FaCarCrash,
  FaBookReader,
  FaMoneyBillAlt,
  FaBriefcaseMedical,
  FaBuilding,
  FaQuestion
} from 'react-icons/fa'

import {
  GrResources,
  GrWheelchairActive
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
    'practiceArea',
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
        .title('About Page')
        .icon(MdBusiness)
        .child(
          S.document()
          .title('About Page')
          .schemaType('page')
          .documentId('aboutPage')
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
    .title('Practice Areas')
    .icon(FaGavel)
    .child(
      S.list()
      .title('Practice Areas')
      .items([
        S.listItem()
        .title('SSD')
        .icon(GrWheelchairActive)
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
            .title('About Page')
            .icon(MdBusiness)
            .child(
              S.document()
              .title('About Page')
              .schemaType('page')
              .documentId('ssdAboutPage')
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
        ),
        S.listItem()
        .title('Litigation')
        .icon(GiScales)
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
              .documentId('litLandingPage')
            ),
            S.listItem()
            .title('About Page')
            .icon(MdBusiness)
            .child(
              S.document()
              .title('About Page')
              .schemaType('page')
              .documentId('litAboutPage')
            ),
            S.listItem()
            .title('Contact Page')
            .icon(MdMail)
            .child(
              S.document()
              .title('Contact Page')
              .schemaType('page')
              .documentId('litContactPage')
            ),
          ])
        ),
        S.listItem()
        .title('Auto Glass')
        .icon(FaCarCrash)
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
              .documentId('agLandingPage')
            ),
            S.listItem()
            .title('About Page')
            .icon(MdBusiness)
            .child(
              S.document()
              .title('About Page')
              .schemaType('page')
              .documentId('agAboutPage')
            ),
            S.listItem()
            .title('Contact Page')
            .icon(MdMail)
            .child(
              S.document()
              .title('Landing Page')
              .schemaType('page')
              .documentId('agContactPage')
            ),
          ])
        ),
        S.listItem()
        .title('Wills Trust Probate')
        .icon(FaBookReader)
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
              .documentId('wtbLandingPage')
            ),
            S.listItem()
            .title('About Page')
            .icon(MdBusiness)
            .child(
              S.document()
              .title('About Page')
              .schemaType('page')
              .documentId('wtbAboutPage')
            ),
            S.listItem()
            .title('Contact Page')
            .icon(MdMail)
            .child(
              S.document()
              .title('Contact Page')
              .schemaType('page')
              .documentId('wtbContactPage')
            ),
          ])
        ),
        S.listItem()
        .title('Real Estate')
        .icon(MdHome)
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
              .documentId('reLandingPage')
            ),
            S.listItem()
            .title('About Page')
            .icon(MdBusiness)
            .child(
              S.document()
              .title('About Page')
              .schemaType('page')
              .documentId('reAboutPage')
            ),
            S.listItem()
            .title('Contact Page')
            .icon(MdMail)
            .child(
              S.document()
              .title('Contact Page')
              .schemaType('page')
              .documentId('reContactPage')
            ),
          ])
        ),
        S.listItem()
        .title('Business Legal Service And Advice')
        .icon(FaBuilding)
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
              .documentId('blsaLandingPage')
            ),
            S.listItem()
            .title('About Page')
            .icon(MdBusiness)
            .child(
              S.document()
              .title('About Page')
              .schemaType('page')
              .documentId('blsaAboutPage')
            ),
            S.listItem()
            .title('Contact Page')
            .icon(MdMail)
            .child(
              S.document()
              .title('Contact Page')
              .schemaType('page')
              .documentId('blsaContactPage')
            ),
          ])
        ),
        S.listItem()
        .title('Property Damage')
        .icon(GiDamagedHouse)
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
              .documentId('pdLandingPage')
            ),
            S.listItem()
            .title('About Page')
            .icon(MdBusiness)
            .child(
              S.document()
              .title('About Page')
              .schemaType('page')
              .documentId('pdAboutPage')
            ),
            S.listItem()
            .title('Contact Page')
            .icon(MdMail)
            .child(
              S.document()
              .title('Contact Page')
              .schemaType('page')
              .documentId('pdContactPage')
            ),
          ])
        ),
        S.listItem()
        .title('Long Term Disability')
        .icon(FaBriefcaseMedical)
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
              .documentId('ltdLandingPage')
            ),
            S.listItem()
            .title('About Page')
            .icon(MdBusiness)
            .child(
              S.document()
              .title('About Page')
              .schemaType('page')
              .documentId('ltdAboutPage')
            ),
            S.listItem()
            .title('Contact Page')
            .icon(MdMail)
            .child(
              S.document()
              .title('Contact Page')
              .schemaType('page')
              .documentId('ltdContactPage')
            ),
          ])
        ),

      ])
    ),
    S.listItem()
    .title('Team Members')
    .icon(MdPeople)
    .child(
      S.documentTypeList('teamMember')
    ),
    S.listItem()
    .title('Testimonials')
    .icon(MdThumbUp)
    .child(
      S.documentTypeList('testimonial')
    ),
    S.listItem()
    .title('FAQ')
    .icon(FaQuestion)
    .child(
      S.documentTypeList('faq')
    ),
    ...S.documentTypeListItems().filter(hiddenDocTypes),
  ])
