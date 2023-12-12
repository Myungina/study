import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Worklist from './Worklist';

export default function Portfolio(){

        
    const [work] = useState(Worklist);
    const [company] = useState(work[0]);
    const [work_list] = useState(work[1]);
    const [companyId, setIndex] = useState(99);

    return(
        <div className="section">
        <Header/>
            <div className="wrap content">
                <div className="inner">
                    <ul className="tab">
                        {company.map(item  => (
                            <li key={company.com_id} className= {companyId === item.com_id ? 'active' : null}
                                onClick={() => setIndex(item.com_id)}>
                                {item.name}
                            </li> 
                        )) }
                    </ul>
                    {company.filter(item => companyId === item.com_id).map(item => (
                        <div className="">
                            {work_list.map((val) => <li>{val.name}</li>)}
                        </div>
                    ))}
                </div>
            </div>
        <Footer/>
        </div>
    )
}