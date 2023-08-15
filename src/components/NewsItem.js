import React from 'react'

const NewsItem = (props)=> {
        let { title, description, newsUrl, author, date, imageUrl, source } = props;
        return (
            <div className="my-3">
                <div className="card" style={{height:440}}>
                    <div style={{
                       
                        position: 'absolute',
                        right: '0',
                        hight: '30',
                    
                    }
                    }> 
                        <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
                    <img style={{height:180}} src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} alt="..." />
                    <div className="card-body">
                        <h5 >{!title ? "Stocks in news: BLS International, Airtel, Sapphir" : title} </h5>
                        <p >{!description ? "Swaminathan Janakiraman, a nominee director representing State Bank of India (SBI), has resigned as" : description}</p>
                        <p ><small >By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a  href={newsUrl}  className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
     
}

export default NewsItem
