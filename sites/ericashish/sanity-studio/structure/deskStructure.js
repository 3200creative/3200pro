import S from '@sanity/desk-tool/structure-builder'
import {
  MdWork,
  MdSettings,
  MdEventAvailable,
  MdFace,
  MdLibraryMusic,
  MdCameraAlt,
  MdInfo,
  MdList,
  MdLocalCafe,
  MdFormatAlignJustify,
  MdMic,
  MdHome,
  MdLanguage,
} from "react-icons/md"

import {
  RiLayoutBottom2Fill,
  RiLayoutTop2Fill
} from "react-icons/ri"
import  {
  GiHamburgerMenu
} from "react-icons/gi"

const hiddenDocTypes = listItem =>
  ![
    'event',
    'music',
    'business',
    'life',
    'tea',
    'page',
    'podcast',
    'siteSettings',
    'newsletterSignup',
    'menuLink',
    'globalOptions',
    'author',
    'footer',
    'footerSection',
    'menus'
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title("Site Settings")
        .icon(MdSettings)
        .child(
          S.list()
            .title("Site Settings")
            .items([
              S.listItem()
                .title("Metadata")
                .icon(MdInfo)
                .child(
                  S.document()
                    .title("Metadata")
                    .schemaType("siteSettings")
                    .documentId("siteSettings")
                ),
              S.listItem()
                .title("Header")
                  .icon(RiLayoutTop2Fill)
                  .child(
                    S.documentTypeList("menuLink").title("Navigation Links")
                  ),
              S.listItem()
                .title("Footer")
                .icon(RiLayoutBottom2Fill)
              .child(
                S.document()
                  .title("Footer")
                  .schemaType("footer")
                  .documentId("footer")
              ),
              S.listItem()
                .title('Additional Menus')
                .icon(GiHamburgerMenu)
                .child(
                  S.documentTypeList('menu')
              ),
              S.listItem()
                .title('Author')
                .icon(MdFace)
                .child(
                  S.documentTypeList('author')
              ),
              S.listItem()
              .title("Global Options")
              .icon(MdLanguage)
              .child(
                S.document()
                  .title("Metadata")
                  .schemaType("globalOptions")
                  .documentId("globalOptions")
              ),
              S.listItem()
                .title("Newsletter Signup")
                .icon(MdInfo)
                .child(
                  S.document()
                    .title("Newsletter Signup")
                    .schemaType("newsletterSignup")
                    .documentId("newsletterSignup")
                ),
            ])
        ),
        S.divider(),
      S.listItem()
      .title('Homepage')
      .icon(MdHome)
      .child(
        S.document()
                    .title("Homepage")
                    .schemaType("page")
                    .documentId("homepage")
      ),
      S.listItem()
      .title('Events')
      .icon(MdEventAvailable)
      .child(
        S.documentTypeList('event')
      ),
      S.listItem()
      .title('Business')
      .icon(MdWork)
      .child(
        S.documentTypeList('business')
      ),
      S.listItem()
      .title('Life')
      .icon(MdFace)
      .child(
        S.documentTypeList('life')
      ),
      S.listItem()
      .title('Music')
      .icon(MdLibraryMusic)
      .child(
        S.documentTypeList('music')
      ),
      S.listItem()
      .title('Tea')
      .icon(MdLocalCafe)
      .child(
        S.documentTypeList('tea')
      ),
      S.listItem()
      .title('Pages')
      .icon(MdFormatAlignJustify)
      .child(
        S.documentTypeList('page')
      ),
      S.listItem()
      .title('Podcast')
      .icon(MdMic)
      .child(
        S.documentTypeList('podcast')
      ),
      
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
