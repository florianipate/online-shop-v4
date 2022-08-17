import './custom-colection.style.scss';

const CustomColection = () => {
    return (
        <div className='section-grid'>
            <div className="section-wrapper-grid lg-col-8">
                <div className="card-grid-main">
                    
                        <img src='images/Grid_Desktop_2.jpg' alt='images'/>
                    
                </div>
                <div className="card-grid desktop-only">
                    <div>
                        <img src='images/farah-cami-split-maxi-dress-green-tropical-print.webp' alt='images'/>
                    </div>
                    <div className='card-text'>
                    Card <br></br>
                        Card
                    </div>
                </div>
                <div className="card-grid">
                    <div>
                        <img src='images/floral-wrap-midi-dress-in-white.webp' alt='images' />
                    </div>
                    <div className='card-text'>
                        Card
                    </div>
                </div>
                <div className="card-grid">
                    <div>
                        <img src='images/leaf-print-asymmetric-choker-neck-midi-dress.webp' alt='images'/>
                    </div>
                    <div className='card-text'>
                        Card
                    </div>
                </div>
                <div className="card-grid">
                    <div>
                        <img src='images/trixie-angel-sleeve-culotte-jumpsuit-navy-floral.webp' alt='images' />
                    </div>
                    <div className='card-text'>
                        Card <br></br>
                        Card
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default CustomColection;