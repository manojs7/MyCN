import React from "react";
import {Helmet} from "react-helmet";

class Zoho extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
              <script type="text/javascript" id="zsiqchat">{`var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "99b5ba1c1d8e0e516ed773004b338dd1578d41185684ec39567606d36ae19b4dda650c6fc171098ce0179514dc48a6cb", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);`}</script>
            </Helmet>
        </div>
    );
  }
};

export default Zoho