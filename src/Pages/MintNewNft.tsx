import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Modal from '../components/Modal/Modal'

const MintNewNft = () => {
    
  const handleSubmit = (e:any) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const values = Object.fromEntries(data.entries());
    console.log(values);return;
    // let validation = new Validator(values, rules);

    // validation.setAttributeNames(attributes);
    // if (userAccount == undefined) {
    //   SimpleToastError("Connect your wallet to proceed!");
    //   return;
    // }

    // if (validation.fails()) {
    //   ToastFormErrors(MapFormErrorsInArr(validation.errors.errors));
    // }

    // if (validation.passes()) {
    //   // console.log("passed");
    //   dispatch(buyTokens(values.amount, referrer, userAccount));
    // }
  };
    return (
        <div>
        <Header />
            {/* start page title area */}
            <div className="rn-breadcrumb-inner ptb--30">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <h5 className="title text-center text-md-start">Mint new NFT</h5>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-list">
                                <li className="item"><a href="index.html">Home</a></li>
                                <li className="separator"><i className="feather-chevron-right" /></li>
                                <li className="item current">Mint new NFT</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* end page title area */}
            {/* create new product area */}
            <div className="create-area rn-section-gapTop">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-3 offset-1 ml_md--0 ml_sm--0">
                            {/* file upload area */}
                            <div className="upload-area">
                                <div className="upload-formate mb--30">
                                    <h6 className="title">
                                        Upload file
                                    </h6>
                                    <p className="formate">
                                        Drag or choose your file to upload
                                    </p>
                                </div>
                                <div className="brows-file-wrapper">
                                    {/* actual upload which is hidden */}
                                    <input name="createinputfile" id="createinputfile" type="file" className="inputfile" />
                                    <img id="createfileImage" src="assets/images/portfolio/portfolio-05.jpg" alt="Portfolio" data-black-overlay={6} />
                                    {/* our custom upload button */}
                                    <label htmlFor="createinputfile" title="No File Choosen">
                                        <i className="feather-upload" />
                                        <span className="text-center">Choose a File</span>
                                        <p className="text-center mt--10">PNG, GIF, WEBP, MP4 or MP3. <br />    Max 1Gb.</p>
                                    </label>
                                </div>
                            </div>
                            {/* end upoad file area */}
                        </div>
                        <div className="col-lg-7">
                            <div className="form-wrapper-one">
                                <form className="row" onSubmit={handleSubmit}>
                                    <div className="col-md-12">
                                        <div className="input-box pb--20">
                                            <label htmlFor="name" className="form-label">Product Name</label>
                                            <input name="name" placeholder="e. g. `Digital Awesome Game`" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="input-box pb--20">
                                            <label htmlFor="Discription" className="form-label">Description</label>
                                            <textarea name="description" rows={3} placeholder="e. g. “After purchasing the product you can get item...”" defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-box pb--20">
                                            <label htmlFor="dollerValue" className="form-label">Item Price in $</label>
                                            <input name="price" placeholder="e. g. `20$`" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-box pb--20">
                                            <label htmlFor="Royality" className="form-label">Royality</label>
                                            <input name="royality" placeholder="e. g. `20%`" />
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-xl-4">
                                        <div className="input-box">
                                            <button type="button" className="btn btn-primary-alta btn-large w-100" data-bs-toggle="modal" data-bs-target="#uploadModal">Preview</button>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-xl-8 mt_lg--15 mt_md--15 mt_sm--15">
                                        <div className="input-box">
                                            <button type='submit' className="btn btn-primary btn-large w-100">Mint Item</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="mt--100 mt_sm--30 mt_md--30 d-block d-lg-none">
                            <h5> Note: </h5>
                            <span> Service fee : <strong>2.5%</strong> </span> <br />
                            <span> You will receive : <strong>25.00 ETH $50,000</strong></span>
                        </div>
                    </div>
                </div>
            </div>
            {/* create new product area */}
      <Modal />
      <Footer />
        </div>

    )
}

export default MintNewNft