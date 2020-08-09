import React from 'react';
import style from './Pagebar.module.css';

let Pagebar = (props) => {

    let pageCount = Math.ceil(props.pageData.totalItemCount / props.pageData.pageSize);

    let pages = [];

    let onPageChanged = (pageNumber) => {
        props.onPageChanged(pageNumber);
    }

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return (
        <div className={style.pagebar}>
            {pages.map(p => {
                return <div className={props.pageData.currentPage === p && style.active}
                            onClick={ (e) => onPageChanged(p) }>{p}</div>;
            })}
        </div>
    )
}

export default Pagebar;