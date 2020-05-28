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
} from 'react-icons/lib/md'

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
    'menuLinks',
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
                .title("Navigation Links")
                .icon(MdList)
                .child(
                  S.documentTypeList("menuLink").title("Navigation Links")
                ),
            ])
        ),
      // Add a visual divider (optional)
      S.divider(),
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
