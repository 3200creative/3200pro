/** @jsx jsx */
import { jsx } from "theme-ui" 
import { useStaticQuery, graphql } from "gatsby"
export const HeaderData = () => {
    const placeholderMenuLinks = [
        {
            link: '#',
            name: 'Placeholder 2',
            subMenu: [
            {
                name: `Earth`,
                link: `/projects/earth`,
            },
            ], 
        },
        ]
    const sanityMenuLinks = [
        {
            link: '#',
            name: 'Sanity Link 1',
            subMenu: [
            {
                name: `Earth`,
                link: `/projects/earth`,
            },
            ], 
        },
        ]
    const allData = {
        placeholderMenuLinks,
        sanityMenuLinks,
        }
    return allData
}