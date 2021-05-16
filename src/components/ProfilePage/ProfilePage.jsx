import React, { Component } from 'react';
import Navbar from '../common/Navbar'
import './ProfilePage.css'
import axios from 'axios'
import Chat from '../common/Chat'

class ProfilePage extends Component {
    state = { 
        data:{},
        currentlySelectedItem:null
     }

    content = [
        {type:"link",text:"Home",url:"/home"},
        {type:"link",text:"AR Tour",url:""},
        {type:"link",text:"Find Stalls",url:"/profiles"}
    ]

   

    componentDidMount(){
        // axios.get(`/profile/${this.props.id}`)
        // .then(response => response.data)
        // .then(data => this.setState({data}))
        const data = [
            {   
                id:1,
                imgURL:"https://b.zmtcdn.com/data/pictures/chains/3/19485193/20568152b838846502c635dea08cbcdd.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                name:"The Burger joint",
                items:[
                    {id:1,name:"Maxx Burger",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend gravida velit, vestibulum imperdiet mi ullamcorper a. Pellentesque ante augue, ultricies vitae enim non, ullamcorper ornare arcu. Donec ac volutpat sem, eget finibus ex. Duis consequat mollis arcu, non vehicula massa feugiat ac. Pellentesque tincidunt hendrerit rhoncus. Aliquam euismod auctor ex, sed commodo justo pulvinar et. Proin quis eleifend ante. Praesent rutrum viverra risus, id varius dolor iaculis id. Phasellus in erat ex. Vivamus luctus libero dui, eget mattis enim venenatis et. Nullam at imperdiet lorem, ultrices pulvinar leo. Aliquam erat volutpat. Integer auctor risus in ex viverra luctus. Aenean ante ex, tempus ac dapibus at, tincidunt ac nunc.",imgURL:"https://www.foodrepublic.com/wp-content/uploads/2011/06/beefburger.jpg"},
                    {id:2,name:"Cheese Burger",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend gravida velit, vestibulum imperdiet mi ullamcorper a. Pellentesque ante augue, ultricies vitae enim non, ullamcorper ornare arcu. Donec ac volutpat sem, eget finibus ex. Duis consequat mollis arcu, non vehicula massa feugiat ac. Pellentesque tincidunt hendrerit rhoncus. Aliquam euismod auctor ex, sed commodo justo pulvinar et. Proin quis eleifend ante. Praesent rutrum viverra risus, id varius dolor iaculis id. Phasellus in erat ex. Vivamus luctus libero dui, eget mattis enim venenatis et. Nullam at imperdiet lorem, ultrices pulvinar leo. Aliquam erat volutpat. Integer auctor risus in ex viverra luctus. Aenean ante ex, tempus ac dapibus at, tincidunt ac nunc.",imgURL:"https://www.simplyrecipes.com/thmb/nIWS_mpUuNlVAKTdSNwm5D6JtZM=/1600x1200/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__06__HT-Grill-Burger-LEAD-VERTICAL-d0ae8c04f90c4cc2b03cd0b154e439eb.jpg"},
                    {id:3,name:"Chicken Burger",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend gravida velit, vestibulum imperdiet mi ullamcorper a. Pellentesque ante augue, ultricies vitae enim non, ullamcorper ornare arcu. Donec ac volutpat sem, eget finibus ex. Duis consequat mollis arcu, non vehicula massa feugiat ac. Pellentesque tincidunt hendrerit rhoncus. Aliquam euismod auctor ex, sed commodo justo pulvinar et. Proin quis eleifend ante. Praesent rutrum viverra risus, id varius dolor iaculis id. Phasellus in erat ex. Vivamus luctus libero dui, eget mattis enim venenatis et. Nullam at imperdiet lorem, ultrices pulvinar leo. Aliquam erat volutpat. Integer auctor risus in ex viverra luctus. Aenean ante ex, tempus ac dapibus at, tincidunt ac nunc.",imgURL:"https://sifu.unileversolutions.com/image/en-LK/recipe-topvisual/2/1260-709/crispy-fried-chicken-burger-50388014.jpg"},
                ],
            },
            {
                id:2,
                imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1H80WROa-XIbww3eCKm8pIf394E4kFAYFAg&usqp=CAU",
                name:"Tres bon",
                items:[
                    {id:1,name:"Shirt",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend gravida velit, vestibulum imperdiet mi ullamcorper a. Pellentesque ante augue, ultricies vitae enim non, ullamcorper ornare arcu. Donec ac volutpat sem, eget finibus ex. Duis consequat mollis arcu, non vehicula massa feugiat ac. Pellentesque tincidunt hendrerit rhoncus. Aliquam euismod auctor ex, sed commodo justo pulvinar et. Proin quis eleifend ante. Praesent rutrum viverra risus, id varius dolor iaculis id. Phasellus in erat ex. Vivamus luctus libero dui, eget mattis enim venenatis et. Nullam at imperdiet lorem, ultrices pulvinar leo. Aliquam erat volutpat. Integer auctor risus in ex viverra luctus. Aenean ante ex, tempus ac dapibus at, tincidunt ac nunc.",imgURL:"https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9088.png"},
                    {id:2,name:"Shoe",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend gravida velit, vestibulum imperdiet mi ullamcorper a. Pellentesque ante augue, ultricies vitae enim non, ullamcorper ornare arcu. Donec ac volutpat sem, eget finibus ex. Duis consequat mollis arcu, non vehicula massa feugiat ac. Pellentesque tincidunt hendrerit rhoncus. Aliquam euismod auctor ex, sed commodo justo pulvinar et. Proin quis eleifend ante. Praesent rutrum viverra risus, id varius dolor iaculis id. Phasellus in erat ex. Vivamus luctus libero dui, eget mattis enim venenatis et. Nullam at imperdiet lorem, ultrices pulvinar leo. Aliquam erat volutpat. Integer auctor risus in ex viverra luctus. Aenean ante ex, tempus ac dapibus at, tincidunt ac nunc.",imgURL:"https://media.centrepointstores.com/i/centrepoint/Sports%20copy-desktop"},
                    {id:3,name:"Jeans",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend gravida velit, vestibulum imperdiet mi ullamcorper a. Pellentesque ante augue, ultricies vitae enim non, ullamcorper ornare arcu. Donec ac volutpat sem, eget finibus ex. Duis consequat mollis arcu, non vehicula massa feugiat ac. Pellentesque tincidunt hendrerit rhoncus. Aliquam euismod auctor ex, sed commodo justo pulvinar et. Proin quis eleifend ante. Praesent rutrum viverra risus, id varius dolor iaculis id. Phasellus in erat ex. Vivamus luctus libero dui, eget mattis enim venenatis et. Nullam at imperdiet lorem, ultrices pulvinar leo. Aliquam erat volutpat. Integer auctor risus in ex viverra luctus. Aenean ante ex, tempus ac dapibus at, tincidunt ac nunc.",imgURL:"https://media.gq.com/photos/6010533f9d3f40b65af70873/master/w_1280%2Cc_limit/COF-Studio-M1-Slim-Fit-Jeans.jpg"},
                ],
            },
            {   
                id:3,
                imgURL:"https://www.romanticasheville.com/sites/default/files/images/basic_page/asheville-farmers-markets.jpg",
                name:"Farmer's paradise",
                items:[
                    {id:1,name:"Brocolli",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend gravida velit, vestibulum imperdiet mi ullamcorper a. Pellentesque ante augue, ultricies vitae enim non, ullamcorper ornare arcu. Donec ac volutpat sem, eget finibus ex. Duis consequat mollis arcu, non vehicula massa feugiat ac. Pellentesque tincidunt hendrerit rhoncus. Aliquam euismod auctor ex, sed commodo justo pulvinar et. Proin quis eleifend ante. Praesent rutrum viverra risus, id varius dolor iaculis id. Phasellus in erat ex. Vivamus luctus libero dui, eget mattis enim venenatis et. Nullam at imperdiet lorem, ultrices pulvinar leo. Aliquam erat volutpat. Integer auctor risus in ex viverra luctus. Aenean ante ex, tempus ac dapibus at, tincidunt ac nunc.",imgURL:"https://solidstarts.com/wp-content/uploads/Broccoli_edited-480x320.jpg"},
                    {id:2,name:"Watermelon",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend gravida velit, vestibulum imperdiet mi ullamcorper a. Pellentesque ante augue, ultricies vitae enim non, ullamcorper ornare arcu. Donec ac volutpat sem, eget finibus ex. Duis consequat mollis arcu, non vehicula massa feugiat ac. Pellentesque tincidunt hendrerit rhoncus. Aliquam euismod auctor ex, sed commodo justo pulvinar et. Proin quis eleifend ante. Praesent rutrum viverra risus, id varius dolor iaculis id. Phasellus in erat ex. Vivamus luctus libero dui, eget mattis enim venenatis et. Nullam at imperdiet lorem, ultrices pulvinar leo. Aliquam erat volutpat. Integer auctor risus in ex viverra luctus. Aenean ante ex, tempus ac dapibus at, tincidunt ac nunc.",imgURL:"https://post.healthline.com/wp-content/uploads/2020/08/10889-The_Watermelon_Diet_Fact_or_Fiction-_732x549-thumbnail-732x549.jpg"},
                    {id:3,name:"Lettuce",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend gravida velit, vestibulum imperdiet mi ullamcorper a. Pellentesque ante augue, ultricies vitae enim non, ullamcorper ornare arcu. Donec ac volutpat sem, eget finibus ex. Duis consequat mollis arcu, non vehicula massa feugiat ac. Pellentesque tincidunt hendrerit rhoncus. Aliquam euismod auctor ex, sed commodo justo pulvinar et. Proin quis eleifend ante. Praesent rutrum viverra risus, id varius dolor iaculis id. Phasellus in erat ex. Vivamus luctus libero dui, eget mattis enim venenatis et. Nullam at imperdiet lorem, ultrices pulvinar leo. Aliquam erat volutpat. Integer auctor risus in ex viverra luctus. Aenean ante ex, tempus ac dapibus at, tincidunt ac nunc.",imgURL:"https://cdnprod.mafretailproxy.com/sys-master-root/hfa/hb9/13374542217246/449348_main.jpg_1700Wx1700H"},
                ],
            },
            {   
                id:4,
                imgURL:"https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg",
                name:"BookMart",
                items:[
                    {id:1,name:"Percy Jackson",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend gravida velit, vestibulum imperdiet mi ullamcorper a. Pellentesque ante augue, ultricies vitae enim non, ullamcorper ornare arcu. Donec ac volutpat sem, eget finibus ex. Duis consequat mollis arcu, non vehicula massa feugiat ac. Pellentesque tincidunt hendrerit rhoncus. Aliquam euismod auctor ex, sed commodo justo pulvinar et. Proin quis eleifend ante. Praesent rutrum viverra risus, id varius dolor iaculis id. Phasellus in erat ex. Vivamus luctus libero dui, eget mattis enim venenatis et. Nullam at imperdiet lorem, ultrices pulvinar leo. Aliquam erat volutpat. Integer auctor risus in ex viverra luctus. Aenean ante ex, tempus ac dapibus at, tincidunt ac nunc.",imgURL:"https://upload.wikimedia.org/wikipedia/en/e/eb/Percy_Jackson_%26_the_Olympians_The_Lightning_Thief_poster.jpg"},
                    {id:2,name:"Michael Vey",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend gravida velit, vestibulum imperdiet mi ullamcorper a. Pellentesque ante augue, ultricies vitae enim non, ullamcorper ornare arcu. Donec ac volutpat sem, eget finibus ex. Duis consequat mollis arcu, non vehicula massa feugiat ac. Pellentesque tincidunt hendrerit rhoncus. Aliquam euismod auctor ex, sed commodo justo pulvinar et. Proin quis eleifend ante. Praesent rutrum viverra risus, id varius dolor iaculis id. Phasellus in erat ex. Vivamus luctus libero dui, eget mattis enim venenatis et. Nullam at imperdiet lorem, ultrices pulvinar leo. Aliquam erat volutpat. Integer auctor risus in ex viverra luctus. Aenean ante ex, tempus ac dapibus at, tincidunt ac nunc.",imgURL:"http://prodimage.images-bn.com/pimages/9781481444118_p0_v2_s1200x630.jpg"},
                    {id:3,name:"HIVE",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend gravida velit, vestibulum imperdiet mi ullamcorper a. Pellentesque ante augue, ultricies vitae enim non, ullamcorper ornare arcu. Donec ac volutpat sem, eget finibus ex. Duis consequat mollis arcu, non vehicula massa feugiat ac. Pellentesque tincidunt hendrerit rhoncus. Aliquam euismod auctor ex, sed commodo justo pulvinar et. Proin quis eleifend ante. Praesent rutrum viverra risus, id varius dolor iaculis id. Phasellus in erat ex. Vivamus luctus libero dui, eget mattis enim venenatis et. Nullam at imperdiet lorem, ultrices pulvinar leo. Aliquam erat volutpat. Integer auctor risus in ex viverra luctus. Aenean ante ex, tempus ac dapibus at, tincidunt ac nunc.",imgURL:"https://media.bloomsbury.com/rep/bj/9781408815908.jpg"},
                ],
            },
        ]
        this.setState({data:data.filter(i=>i.id==this.props.match.params.id)[0],currentlySelectedItem:data.filter(i=>i.id==this.props.match.params.id)[0].items[0]})
    }

    handleItemSelect = id => {
        const currentlySelectedItem = this.state.data.items.filter(i => i.id == id)[0]
        this.setState({currentlySelectedItem})
    }

    itemRender(){
        return this.state.data.items.map(i => {
            return (
                <div onClick={() => this.handleItemSelect(i.id)} className="item-container">
                    <img className="item-image" src={i.imgURL} alt=""/>
                    <span>{i.name}</span>
                 </div>
            )
        })
    }

    render() { 
        return ( 
            <div className="profile-page-container">
                <Navbar content={this.content}/>
                <div>
                    <div className="top-profile-page-container">
                        <div id="profile-page-image-container">
                            <h1>{this.state.data.name}</h1>
                            <img id="profile-top-image" src={this.state.data.imgURL} alt=""/>
                        </div>
                        <div id="chat-container">
                            <h1>Chat with the owner</h1>
                            <div id="chat-box">
                                <Chat/>
                            </div>
                        </div>
                    </div>
                    {this.state.currentlySelectedItem && <div className="middle-profile-page-container">
                        <h2>{this.state.currentlySelectedItem.name}</h2>    
                        <div id="inner-container">
                            <div id="item-description">
                                {this.state.currentlySelectedItem.description}
                            </div>
                            <button id="item-purchase-button" className="btn btn-danger">
                                Buy Now
                            </button>
                        </div>
                    </div>}
                    <div className="bottom-profile-page-container">
                        <h3>Popular Items</h3>
                        <div className="profile-items">
                            {this.state.data.items && this.itemRender()}
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ProfilePage;