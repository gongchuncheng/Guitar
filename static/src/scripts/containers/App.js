/*
** 项目路由入口文件，一般不做修改
*/
import React,{Component} from 'react';



class App extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        );
    }
}

export default App;