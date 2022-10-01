import {DiscussionEmbed} from "disqus-react"
  
const Comments = () => {
  const disqusShortname = "Demo-GfG"
  
  const disqusConfig = {
    url: "http://localhost:3000",
    identifier:'123', 
    title: "Demo Post" 
  }
  
  return (
    <div style={{width:"600px"}}>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
  
export default Comments;