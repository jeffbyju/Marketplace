import React, { Component } from 'react';
import Navbar from '../common/Navbar'
import axios from 'axios'
import _ from 'lodash'
import Profile from '../Profile/Profile'
import './ProfileNav.css'

class ProfileNav extends Component {
    state = { 
        stalls:[]
     }

     partition(items, size) {
         var i=0;
        var result = _.groupBy(items, function(item) {
            var value = Math.floor(i/size)
            i+=1;
            return value;
        });
        return _.values(result);
    }

    profiles = [
        {   
            id:1,
            imgURL:"https://b.zmtcdn.com/data/pictures/chains/3/19485193/20568152b838846502c635dea08cbcdd.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            name:"The Burger joint",
            items:[
                {name:"Maxx Burger",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend gravida velit, vestibulum imperdiet mi ullamcorper a. Pellentesque ante augue, ultricies vitae enim non, ullamcorper ornare arcu. Donec ac volutpat sem, eget finibus ex. Duis consequat mollis arcu, non vehicula massa feugiat ac. Pellentesque tincidunt hendrerit rhoncus. Aliquam euismod auctor ex, sed commodo justo pulvinar et. Proin quis eleifend ante. Praesent rutrum viverra risus, id varius dolor iaculis id. Phasellus in erat ex. Vivamus luctus libero dui, eget mattis enim venenatis et. Nullam at imperdiet lorem, ultrices pulvinar leo. Aliquam erat volutpat. Integer auctor risus in ex viverra luctus. Aenean ante ex, tempus ac dapibus at, tincidunt ac nunc.",imgURL:"https://www.foodrepublic.com/wp-content/uploads/2011/06/beefburger.jpg"},
                {name:"Cheese Burger",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend gravida velit, vestibulum imperdiet mi ullamcorper a. Pellentesque ante augue, ultricies vitae enim non, ullamcorper ornare arcu. Donec ac volutpat sem, eget finibus ex. Duis consequat mollis arcu, non vehicula massa feugiat ac. Pellentesque tincidunt hendrerit rhoncus. Aliquam euismod auctor ex, sed commodo justo pulvinar et. Proin quis eleifend ante. Praesent rutrum viverra risus, id varius dolor iaculis id. Phasellus in erat ex. Vivamus luctus libero dui, eget mattis enim venenatis et. Nullam at imperdiet lorem, ultrices pulvinar leo. Aliquam erat volutpat. Integer auctor risus in ex viverra luctus. Aenean ante ex, tempus ac dapibus at, tincidunt ac nunc.",imgURL:"https://www.simplyrecipes.com/thmb/nIWS_mpUuNlVAKTdSNwm5D6JtZM=/1600x1200/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__06__HT-Grill-Burger-LEAD-VERTICAL-d0ae8c04f90c4cc2b03cd0b154e439eb.jpg"},
                {name:"Chicken Burger",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend gravida velit, vestibulum imperdiet mi ullamcorper a. Pellentesque ante augue, ultricies vitae enim non, ullamcorper ornare arcu. Donec ac volutpat sem, eget finibus ex. Duis consequat mollis arcu, non vehicula massa feugiat ac. Pellentesque tincidunt hendrerit rhoncus. Aliquam euismod auctor ex, sed commodo justo pulvinar et. Proin quis eleifend ante. Praesent rutrum viverra risus, id varius dolor iaculis id. Phasellus in erat ex. Vivamus luctus libero dui, eget mattis enim venenatis et. Nullam at imperdiet lorem, ultrices pulvinar leo. Aliquam erat volutpat. Integer auctor risus in ex viverra luctus. Aenean ante ex, tempus ac dapibus at, tincidunt ac nunc.",imgURL:"https://sifu.unileversolutions.com/image/en-LK/recipe-topvisual/2/1260-709/crispy-fried-chicken-burger-50388014.jpg"},
            ],
        },
        {
            id:2,
            imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1H80WROa-XIbww3eCKm8pIf394E4kFAYFAg&usqp=CAU",
            name:"Tres bon",
            items:[
                {name:"Shirt",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend gravida velit, vestibulum imperdiet mi ullamcorper a. Pellentesque ante augue, ultricies vitae enim non, ullamcorper ornare arcu. Donec ac volutpat sem, eget finibus ex. Duis consequat mollis arcu, non vehicula massa feugiat ac. Pellentesque tincidunt hendrerit rhoncus. Aliquam euismod auctor ex, sed commodo justo pulvinar et. Proin quis eleifend ante. Praesent rutrum viverra risus, id varius dolor iaculis id. Phasellus in erat ex. Vivamus luctus libero dui, eget mattis enim venenatis et. Nullam at imperdiet lorem, ultrices pulvinar leo. Aliquam erat volutpat. Integer auctor risus in ex viverra luctus. Aenean ante ex, tempus ac dapibus at, tincidunt ac nunc.",imgURL:"https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9088.png"},
                {name:"Shoe",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend gravida velit, vestibulum imperdiet mi ullamcorper a. Pellentesque ante augue, ultricies vitae enim non, ullamcorper ornare arcu. Donec ac volutpat sem, eget finibus ex. Duis consequat mollis arcu, non vehicula massa feugiat ac. Pellentesque tincidunt hendrerit rhoncus. Aliquam euismod auctor ex, sed commodo justo pulvinar et. Proin quis eleifend ante. Praesent rutrum viverra risus, id varius dolor iaculis id. Phasellus in erat ex. Vivamus luctus libero dui, eget mattis enim venenatis et. Nullam at imperdiet lorem, ultrices pulvinar leo. Aliquam erat volutpat. Integer auctor risus in ex viverra luctus. Aenean ante ex, tempus ac dapibus at, tincidunt ac nunc.",imgURL:"https://media.centrepointstores.com/i/centrepoint/Sports%20copy-desktop"},
                {name:"Jeans",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend gravida velit, vestibulum imperdiet mi ullamcorper a. Pellentesque ante augue, ultricies vitae enim non, ullamcorper ornare arcu. Donec ac volutpat sem, eget finibus ex. Duis consequat mollis arcu, non vehicula massa feugiat ac. Pellentesque tincidunt hendrerit rhoncus. Aliquam euismod auctor ex, sed commodo justo pulvinar et. Proin quis eleifend ante. Praesent rutrum viverra risus, id varius dolor iaculis id. Phasellus in erat ex. Vivamus luctus libero dui, eget mattis enim venenatis et. Nullam at imperdiet lorem, ultrices pulvinar leo. Aliquam erat volutpat. Integer auctor risus in ex viverra luctus. Aenean ante ex, tempus ac dapibus at, tincidunt ac nunc.",imgURL:"https://media.gq.com/photos/6010533f9d3f40b65af70873/master/w_1280%2Cc_limit/COF-Studio-M1-Slim-Fit-Jeans.jpg"},
            ],
        },
        {   
            id:3,
            imgURL:"https://www.romanticasheville.com/sites/default/files/images/basic_page/asheville-farmers-markets.jpg",
            name:"Farmer's paradise",
            items:[
                {name:"Brocolli",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend gravida velit, vestibulum imperdiet mi ullamcorper a. Pellentesque ante augue, ultricies vitae enim non, ullamcorper ornare arcu. Donec ac volutpat sem, eget finibus ex. Duis consequat mollis arcu, non vehicula massa feugiat ac. Pellentesque tincidunt hendrerit rhoncus. Aliquam euismod auctor ex, sed commodo justo pulvinar et. Proin quis eleifend ante. Praesent rutrum viverra risus, id varius dolor iaculis id. Phasellus in erat ex. Vivamus luctus libero dui, eget mattis enim venenatis et. Nullam at imperdiet lorem, ultrices pulvinar leo. Aliquam erat volutpat. Integer auctor risus in ex viverra luctus. Aenean ante ex, tempus ac dapibus at, tincidunt ac nunc.",imgURL:"https://solidstarts.com/wp-content/uploads/Broccoli_edited-480x320.jpg"},
                {name:"Watermelon",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend gravida velit, vestibulum imperdiet mi ullamcorper a. Pellentesque ante augue, ultricies vitae enim non, ullamcorper ornare arcu. Donec ac volutpat sem, eget finibus ex. Duis consequat mollis arcu, non vehicula massa feugiat ac. Pellentesque tincidunt hendrerit rhoncus. Aliquam euismod auctor ex, sed commodo justo pulvinar et. Proin quis eleifend ante. Praesent rutrum viverra risus, id varius dolor iaculis id. Phasellus in erat ex. Vivamus luctus libero dui, eget mattis enim venenatis et. Nullam at imperdiet lorem, ultrices pulvinar leo. Aliquam erat volutpat. Integer auctor risus in ex viverra luctus. Aenean ante ex, tempus ac dapibus at, tincidunt ac nunc.",imgURL:"https://post.healthline.com/wp-content/uploads/2020/08/10889-The_Watermelon_Diet_Fact_or_Fiction-_732x549-thumbnail-732x549.jpg"},
                {name:"Lettuce",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend gravida velit, vestibulum imperdiet mi ullamcorper a. Pellentesque ante augue, ultricies vitae enim non, ullamcorper ornare arcu. Donec ac volutpat sem, eget finibus ex. Duis consequat mollis arcu, non vehicula massa feugiat ac. Pellentesque tincidunt hendrerit rhoncus. Aliquam euismod auctor ex, sed commodo justo pulvinar et. Proin quis eleifend ante. Praesent rutrum viverra risus, id varius dolor iaculis id. Phasellus in erat ex. Vivamus luctus libero dui, eget mattis enim venenatis et. Nullam at imperdiet lorem, ultrices pulvinar leo. Aliquam erat volutpat. Integer auctor risus in ex viverra luctus. Aenean ante ex, tempus ac dapibus at, tincidunt ac nunc.",imgURL:"https://cdnprod.mafretailproxy.com/sys-master-root/hfa/hb9/13374542217246/449348_main.jpg_1700Wx1700H"},
            ],
        },
        {   
            id:4,
            imgURL:"https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg",
            name:"BookMart",
            items:[
                {name:"Percy Jackson",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend gravida velit, vestibulum imperdiet mi ullamcorper a. Pellentesque ante augue, ultricies vitae enim non, ullamcorper ornare arcu. Donec ac volutpat sem, eget finibus ex. Duis consequat mollis arcu, non vehicula massa feugiat ac. Pellentesque tincidunt hendrerit rhoncus. Aliquam euismod auctor ex, sed commodo justo pulvinar et. Proin quis eleifend ante. Praesent rutrum viverra risus, id varius dolor iaculis id. Phasellus in erat ex. Vivamus luctus libero dui, eget mattis enim venenatis et. Nullam at imperdiet lorem, ultrices pulvinar leo. Aliquam erat volutpat. Integer auctor risus in ex viverra luctus. Aenean ante ex, tempus ac dapibus at, tincidunt ac nunc.",imgURL:"https://upload.wikimedia.org/wikipedia/en/e/eb/Percy_Jackson_%26_the_Olympians_The_Lightning_Thief_poster.jpg"},
                {name:"Michael Vey",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend gravida velit, vestibulum imperdiet mi ullamcorper a. Pellentesque ante augue, ultricies vitae enim non, ullamcorper ornare arcu. Donec ac volutpat sem, eget finibus ex. Duis consequat mollis arcu, non vehicula massa feugiat ac. Pellentesque tincidunt hendrerit rhoncus. Aliquam euismod auctor ex, sed commodo justo pulvinar et. Proin quis eleifend ante. Praesent rutrum viverra risus, id varius dolor iaculis id. Phasellus in erat ex. Vivamus luctus libero dui, eget mattis enim venenatis et. Nullam at imperdiet lorem, ultrices pulvinar leo. Aliquam erat volutpat. Integer auctor risus in ex viverra luctus. Aenean ante ex, tempus ac dapibus at, tincidunt ac nunc.",imgURL:"http://prodimage.images-bn.com/pimages/9781481444118_p0_v2_s1200x630.jpg"},
                {name:"HIVE",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend gravida velit, vestibulum imperdiet mi ullamcorper a. Pellentesque ante augue, ultricies vitae enim non, ullamcorper ornare arcu. Donec ac volutpat sem, eget finibus ex. Duis consequat mollis arcu, non vehicula massa feugiat ac. Pellentesque tincidunt hendrerit rhoncus. Aliquam euismod auctor ex, sed commodo justo pulvinar et. Proin quis eleifend ante. Praesent rutrum viverra risus, id varius dolor iaculis id. Phasellus in erat ex. Vivamus luctus libero dui, eget mattis enim venenatis et. Nullam at imperdiet lorem, ultrices pulvinar leo. Aliquam erat volutpat. Integer auctor risus in ex viverra luctus. Aenean ante ex, tempus ac dapibus at, tincidunt ac nunc.",imgURL:"https://media.bloomsbury.com/rep/bj/9781408815908.jpg"},
            ],
        },
    ]

    componentDidMount(){
        // axios.get('/profiles/all')
        // .then(response => response.data)
        // .then(data => this.partition(data,3))
        // .then(data => this.setState({stalls:data}))

        this.setState({stalls:this.profiles})

    }

    content = [
        {type:"link",text:"Home"},
        {type:"link",text:"AR Tour"},
        {type:"link",text:"Find Items"}
    ]
    

    render() { 
        return ( 
            <React.Fragment>
                <Navbar content={this.content}/>
                <div className="profiles-nav-container">
                    <h1>Explore</h1>
                    <div class="outer-profiles-container">
                        {this.partition(this.state.stalls,3).map(s => {
                            return (
                                <div className="profiles-container">
                                    {s.map(i => {
                                        return (
                                            <Profile id={i.id} imgURL={i.imgURL} name={i.name}/>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default ProfileNav;