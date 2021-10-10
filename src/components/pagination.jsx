import React from 'react'

export default function Pagination({pageSize,tableSize,currentPage,onPage}) {
    const count = (Math.ceil)(tableSize / pageSize);
    let pages = [];
    for(let i=1;i<=count;i++)
    pages.push(i);
    let classes = "page-item ";
    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {pages.map(page=>(
                        <li className={currentPage !== page ? classes : classes + "active"} onClick={()=>onPage(page)} key={page}><a className="page-link" href="#">{page}</a></li>
                    ))}
                    
                </ul>
            </nav>
        </div>
    )
}
