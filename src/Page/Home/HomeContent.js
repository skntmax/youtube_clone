import React ,{useState , useEffect} from 'react'
import VideosRow from '../../Main/VideosRow'
import axios from 'axios'
import './HomeContent.css'
import './videoDiv.css'
 
const HomeContent = (props) => {
    const [ recommendedVideos,setRecommendedVideos ]  = useState([ {
        thumbnail : "",
        title: "",
        length: 208 ,
        channel: {
            name: "",
            link: "",
            image: ""
        },
        viewCount: 1812124001,
        uploadedAt: ""
    } ])

    const [channelVideos , setChannelVideos ]= useState([
        {
            id:"",
            thumbnail: ``,
            title: "",
            length: 208,
            channel: {
                name: "",
                link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
                image: "https://picsum.photos/30/30"
            },
            viewCount: 1812124001,
            uploadedAt: "2020-12-01"
        }
    ] )

    const marqChan = {
        name: "sknt max ",
        link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
        image: "https://picsum.photos/5/58"
    }

    useEffect(()=>{ 

        axios({
           "method": "GET",
           "url": 'https://www.googleapis.com/youtube/v3/search',
           "params":{
               'part':'snippet',
               'maxResults':'10',
               'key':'AIzaSyAIeHfkaEA5Z50065eWt6Wt4c7TIYe5sDo',
              'q':props.setval
      
           }
       }).then((res) => {
               console.log(res.data.items) ;
               let all_result= []
               
               res.data.items.map(async (ele, index)=>{
                    console.log(ele) 
                    const rest_val=  {
                        id: ele.id.videoId,
                        thumbnail : ele.snippet.thumbnails.medium.url,
                        title: ele.snippet.title,
                        length: 208 ,
                        channel: {
                            name: ele.snippet.channelTitle,
                            link: `https://www.youtube.com/watch?v=${ele.id.videoId}`,
                            image: ele.snippet.thumbnails.medium.url
                        } ,
                        viewCount: 1812124001,
                        uploadedAt: `${ele.snippet.publishedAt}`
                    }
                all_result.push(rest_val )
                //  await recommendedVideos.push( rest_val )

               })

               setRecommendedVideos(JSON.parse( JSON.stringify(all_result)))       
   
            //  console.log( "all result " + ) 
             console.log( "set res"+recommendedVideos ) 
            
             
           })
           .catch((error) => {
               console.log(error)
           })
        }, [props.setval] )     
 
     const [videoId, setVideoId] = useState('')   
  const getId= (id)=>{ 
    setVideoId(id)
  }
         
    return (
        <div className="home-content">
            <div className="videodiv" > 
                <iframe width="800" height="400" src={`https://www.youtube.com/embed/${videoId}`}    
            frameBorder="0" autoplay
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
>
</iframe>
            </div>    
            <VideosRow
                type= "channel"
                channel= {marqChan}
                videos= {recommendedVideos}
                videoId={getId}
                />
        </div>
    )
}

export default HomeContent
