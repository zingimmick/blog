import React, {Component} from "react";

export default class Comments extends Component {
  constructor(props){ 
    super(props);
    this.commentBox = React.createRef(); 
  }
  componentDidMount () {
      let scriptEl = document.createElement("script");
      scriptEl.setAttribute("src", "https://giscus.app/client.js");
      scriptEl.setAttribute("crossorigin","anonymous");
      scriptEl.setAttribute("async", true);
      scriptEl.setAttribute("data-repo", "zingimmick/blog");
      scriptEl.setAttribute("data-repo-id","R_kgDOG5nuog");
      scriptEl.setAttribute("data-category","Announcements");
      scriptEl.setAttribute("data-category-id","DIC_kwDOG5nuos4CBUHZ");
      scriptEl.setAttribute("data-mapping","title");
      scriptEl.setAttribute("data-reactions-enabled","1");
      scriptEl.setAttribute("data-emit-metadata","0");
      scriptEl.setAttribute("data-input-position","bottom");
      scriptEl.setAttribute("data-theme","preferred_color_scheme");
      scriptEl.setAttribute("data-lang","zh-CN");
      this.commentBox.current.appendChild(scriptEl);
  }

  render() {
    return (
        <div>
          <div ref={this.commentBox} className="comment-box"/>
        </div>
    );
  }
}