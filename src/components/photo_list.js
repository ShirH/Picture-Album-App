import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactModal from './modal';

import {fetchPhotos, changeModalVisibility} from '../actions/index';

const resize= 150;
class PhotoList extends Component{

    constructor(props){
        super(props)

        this.state = {
            key: "",
            height: 300,
            width: 300
        };
    }

    componentWillMount(){
        this.props.fetchPhotos();
    }

    openModule(key){
        this.setState({key});
        this.props.changeModalVisibility(false);
    }

    renderPhoto(){
        let aToRender = [];
        let i =0;
        let photos = this.props.photos;
        for (let key in photos) {
            aToRender[i] =<img className="pull-sm-4 image" src={`${photos[key]}`} alt="Smiley face" height="300" width="300" onClick={()=>{this.openModule(key)}}/>;
            i++
        }
        return aToRender;
    }

    zoomIn(){
        this.setState({
            height:this.state.height*(resize / 100),
            width:this.state.width*(resize / 100)
        });
    }

    zoomOut(){
        this.setState({
            height:this.state.height/(resize / 100),
            width:this.state.width/(resize / 100)
        });
    }

    render(){
        this.renderPhoto.bind(this);
        return (<div className="">
            {this.renderPhoto()}
            <ReactModal>
                <div id="Container">
                <img className="pull-sm-4 image" src={` ${this.state.key ? this.props.photos[this.state.key] : ""}`} alt="Smiley face" height={this.state.height} width={this.state.width}/>
                </div>

                <br/>
                <buttn className="btn btn-primary" onClick={()=>this.zoomIn()}>
                    +
                </buttn>
                <buttn className="btn btn-primary" onClick={()=>this.zoomOut()}>
                    -
                </buttn>
            </ReactModal>
        </div>);
    }
}

function mapStateToProps(state){
    return {photos: state.photos};
}
export default connect(mapStateToProps ,{fetchPhotos, changeModalVisibility})(PhotoList);