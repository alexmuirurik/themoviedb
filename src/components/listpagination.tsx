import React, { useEffect, useState } from "react"
import { Link, useLocation, useSearchParams } from "react-router-dom"
import { Fetchmoviedir } from "../func.tsx"
import Pageitem from "../subparts/pageitem.tsx"

const ListPagination = (url: any) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const location = useLocation()
    const [currentpage, setcurrentpage] = useState(0)
    const [totalpages, settotalpages] = useState(0)
    useEffect(() => {
        Fetchmoviedir(url.url).then(res => {
            setcurrentpage(res.data.page)
            settotalpages(res.data.total_pages)
        })
    }, [location.pathname, searchParams.get('page')])
    if (totalpages > 1) {
        const rows: React.JSX.Element[] = [];
        const totpages = (totalpages < 500) ? totalpages : 500
        const pages = ((currentpage + 10) <= totpages) ? currentpage + 10 : totpages
        for (let i = currentpage; i <= pages; i++) {
            const active = (i === currentpage ) ? ' active' : ''
            rows.push(<Pageitem number={i - 1} active={active} page={i} />);
        }

        const first = (currentpage === 1) ? ' disabled' : ''
        const last = (currentpage === totpages) ? ' disabled' : ''
        const prev = currentpage - 1
        const next = currentpage + 1
        return (

            <div className="pagination my-4">
                <nav aria-label="Page navigation col-12" style={{ width: '100%' }}>
                    <ul className="pagination justify-content-center">
                        <li className={'page-item p-2' + first}>
                            <Link className="page-link text-dark" to={location.pathname + "?page=" + prev}>Previous</Link>
                        </li>
                        {rows}
                        <li className={'page-item p-2' + last}>
                            <Link className="page-link text-dark" to={location.pathname + "?page=" + next}>Next</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default ListPagination