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
} from 'react-icons/md'

const hiddenDocTypes = listItem =>
  ![
    'page',
    'siteSettings',
    'homepage',
    'landingPage',
    'aboutPage',
    'contactPage',
    'galleryPage'
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
            ])
        ),
      // Add a visual divider (optional)
      S.divider(),
      S.listItem()
      .title('Pages')
      .icon(MdFormatAlignJustify)
      .child(
        S.list()
            .title("AHI Pages")
            .items([
              S.listItem()
                .title("Homepage")
                .icon(MdHome)
                .child(
                  S.document()
                    .title("Homepage")
                    .schemaType("homepage")
                    .documentId("homepage")
                ),
                S.listItem()
                .title("About Page")
                .icon(MdBusiness)
                .child(
                  S.document()
                    .title("About")
                    .schemaType("aboutPage")
                    .documentId("aboutPage")
                ),
                S.listItem()
                .title("Contact Page")
                .icon(MdMail)
                .child(
                  S.document()
                    .title("Contact")
                    .schemaType("contactPage")
                    .documentId("contactPage")
                ),
            ]),
      ),
      S.listItem()
                    .title('Gallery Pages')
                    .icon(MdCollections)
                    .child(
                      S.documentTypeList('galleryPage')
      ),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
