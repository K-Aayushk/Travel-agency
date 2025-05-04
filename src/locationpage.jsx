import './locationpage.css';


function locationpage(){
    return(
        <div className="location-page-container">
            <div className="location-page">
                <div className="location-page-header">
                    <h1>TRAVEL BOOKING:-</h1>
                </div>
                <div className="location-page-content">
                    <label htmlFor="" className='label-tag'>TRAVEL FROM:-</label>
                    <input type="text" placeholder='SEARCH HERE' />
                    <label htmlFor="" className='label-tag'>TRAVEL TO:-</label>
                    <input type="text"placeholder='SEARCH HERE'/>
                    <button>SUBMIT</button>
                </div>
            </div>
        </div>
    );
}


export default locationpage;