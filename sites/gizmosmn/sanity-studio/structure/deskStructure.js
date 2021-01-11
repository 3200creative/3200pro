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
  MdArchive,
} from 'react-icons/md'

import {
  BsFilePost
} from 'react-icons/bs'

const hiddenDocTypes = listItem =>
  ![
    'page',
    'siteSettings',
    'homepage',
    'landingPage',
    'aboutPage',
    'contactPage',
    'galleryPage',
    'companyInformation',
    'post',
    'galleryArchive',
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
              .title("Company Information")
              .icon(MdBusiness)
              .child(
                S.document()
                  .title("Company Information")
                  .schemaType("companyInformation")
                  .documentId("companyInformation")
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
                    .title('Custom Car Showcase')
                    .icon(MdCollections)
                    .child(
                      S.documentTypeList('galleryPage')
      ),
      S.listItem()
                .title("Showcase Primary Page")
                .icon(MdArchive)
                .child(
                  S.document()
                    .title("Showcase Primary Page")
                    .schemaType("galleryArchive")
                    .documentId("galleryArchive")
                ),
      S.listItem()
                    .title('Blog Posts')
                    .icon(BsFilePost)
                    .child(
                      S.documentTypeList('post')
      ),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
