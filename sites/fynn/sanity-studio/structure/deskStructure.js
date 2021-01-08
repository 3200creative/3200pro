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
  GiPayMoney,
  GiFishingBoat,
  GiReceiveMoney,
  GiHamburgerMenu,
} from 'react-icons/gi'

import {
  RiArticleLine,
  RiTeamFill,
  RiRouteFill,
  RiShoppingBagFill
} from 'react-icons/ri'

import {
  GrTree,
  GrServices
} from 'react-icons/gr'

import{
  BsQuestion,
  BsFillPersonLinesFill,
  BsPersonBoundingBox
} from 'react-icons/bs'

const hiddenDocTypes = listItem =>
  ![
    'menu',
    'page',
    'post',
    'siteSettings',
    'globalOptions',
    'landingPage',
    'route',
    'product',
    'affiliate',
    'vendor'
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
        .title('Page Routes')
        .icon(RiRouteFill)
        .child(
          S.documentTypeList('route')
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
          .schemaType('landingPage')
          .documentId('aboutPage')
        ),
        S.listItem()
        .title('Contact Page')
        .icon(MdMail)
        .child(
          S.document()
          .title('Contact Page')
          .schemaType('landingPage')
          .documentId('contactPage')
        ),
        S.listItem()
        .title('Additional Simple Pages')
        .icon(MdExplore)
        .child(
          S.documentTypeList('page')
          .filter('_type == "page" && _id != "contactPage" &&  _id != "profilePage"')
        ),
        S.listItem()
        .title('Additional Landing Pages')
        .icon(MdExplore)
        .child(
          S.documentTypeList('landingPage')
          .filter('_type == "landingPage" && _id != "contactPage" &&  _id != "aboutPage" &&  _id != "homepage"')
        ),
      ])
    ),
    S.listItem()
    .title('Blog Posts')
    .icon(RiArticleLine)
    .child(
      S.documentTypeList('post')
    ),
    S.listItem()
    .title('Products')
    .icon(RiShoppingBagFill)
    .child(
      S.documentTypeList('product')
    ),
    S.listItem()
    .title('Vendors')
    .icon(GiPayMoney)
    .child(
      S.documentTypeList('vendor')
    ),
    S.listItem()
    .title('Affiliates')
    .icon(GiReceiveMoney)
    .child(
      S.documentTypeList('affiliate')
    ),
    ...S.documentTypeListItems().filter(hiddenDocTypes),
  ])