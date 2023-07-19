import React from "react";
import cn from "./Info.module.scss";

const Info = ({ data, title,keyName = '', list = false, classname ='',children }) => {


  return (
   <>
     {(data || data?.length > 0) && <div className={`${cn.info} ${cn[classname]}`}>
       <span className={`${cn.text} ${cn.bold}`}>{title}:</span>
       <div className={cn.info__content}>
         {list ? data?.map((item, index) => (
           <span key={index} className={cn.text}>
          {item[keyName]}
             {data?.length - 1 !== index && ", "}
        </span>
         )) :   <div className={cn.text}>{children}</div>}
       </div>
     </div>}
   </>
  );
};

export default Info;
