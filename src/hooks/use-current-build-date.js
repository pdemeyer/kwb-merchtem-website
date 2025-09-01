import { useStaticQuery, graphql } from "gatsby"

export const useCurrentBuildDate = () => {
  const data = useStaticQuery(graphql`
    query {
      currentBuildDate {
        currentDate
      }
    }
  `)
  return data.currentBuildDate.currentDate
}
