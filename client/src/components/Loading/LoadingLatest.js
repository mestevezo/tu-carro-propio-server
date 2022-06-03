import styled from 'styled-components';

const LoaderContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 5%;
    margin: 1%;

    @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
  }

    @media screen and (max-width: 780px) {
    display: grid;
    padding-bottom: 30%;
  }

`

const Loader = styled.div`
    width: 30%;
    margin-bottom: 5%;

  

    @media screen and (max-width: 780px) {
    width: 50vh;
  }

.movie--isloading {
  border-radius: 20px;
  overflow: hidden;
}

.movie--isloading .loading-image {
  height: 220px;
  background-image: -webkit-linear-gradient(left, #ececec 0px, #f4f4f4 40px, #ececec 80px);
  background-image: -o-linear-gradient(left, #ececec 0px, #f4f4f4 40px, #ececec 80px);
  background-image: linear-gradient(90deg, #ececec 0px, #f4f4f4 40px, #ececec 80px);
  -webkit-animation: shine-loading-image 1s infinite ease-out;
          animation: shine-loading-image 1s infinite ease-out;
}

.movie--isloading .loading-content {
  background: #f7f7f7;
  padding: 10px;
  display: flex;
  height: 160px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.movie--isloading .loading-content .loading-text-container {
  -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
}

.movie--isloading .loading-content .loading-main-text {
  height: 10px;
  width: 65%;
  margin-bottom: 10px;
  background: #ececec;
  background-image: -webkit-linear-gradient(left, #ececec 0px, #f4f4f4 40px, #ececec 80px);
  background-image: -o-linear-gradient(left, #ececec 0px, #f4f4f4 40px, #ececec 80px);
  background-image: linear-gradient(90deg, #ececec 0px, #f4f4f4 40px, #ececec 80px);
  background-size: 250px;
  border-radius: 10px;
  -webkit-animation: shine-loading-container-items 1s infinite ease-out;
          animation: shine-loading-container-items 1s infinite ease-out;
}

.movie--isloading .loading-content .loading-sub-text {
  height: 10px;
  width: 50%;
  background: #ececec;
  background-image: -webkit-linear-gradient(left, #ececec 0px, #f4f4f4 40px, #ececec 80px);
  background-image: -o-linear-gradient(left, #ececec 0px, #f4f4f4 40px, #ececec 80px);
  background-image: linear-gradient(90deg, #ececec 0px, #f4f4f4 40px, #ececec 80px);
  background-size: 250px;
  border-radius: 10px;
  -webkit-animation: shine-loading-container-items 1s infinite ease-out;
          animation: shine-loading-container-items 1s infinite ease-out;
}

.movie--isloading .loading-content .loading-btn {
  width: 60px;
  height: 25px;
  background: #ececec;
  background-image: -webkit-linear-gradient(left, #ececec 0px, #f4f4f4 40px, #ececec 80px);
  background-image: -o-linear-gradient(left, #ececec 0px, #f4f4f4 40px, #ececec 80px);
  background-image: linear-gradient(90deg, #ececec 0px, #f4f4f4 40px, #ececec 80px);
  background-size: 250px;
  border-radius: 3px;
  -webkit-animation: shine-loading-container-items 1s infinite ease-out;
          animation: shine-loading-container-items 1s infinite ease-out;
}


@-webkit-keyframes shine-loading-image {
  0% {
    background-position: -32px;
  }
  100% {
    background-position: 480px;
  }
}


@keyframes shine-loading-image {
  0% {
    background-position: -32px;
  }
  100% {
    background-position: 480px;
  }
}

@-webkit-keyframes shine-loading-container-items {
  0% {
    background-position: -32px;
  }
  100% {
    background-position: 280px;
  }
}

@keyframes shine-loading-container-items {
  0% {
    background-position: -32px;
  }
  100% {
    background-position: 280px;
  }
} `

const LoadingLatest = () => {
    return (

        <>

            <LoaderContainer>
                <Loader>
                    <div className="container">
                        <div className="movie--isloading">
                            <div className="loading-image"></div>
                            <div className="loading-content">
                                <div className="loading-text-container">
                                    <div className="loading-main-text"></div>
                                    <div className="loading-sub-text"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Loader>
                <Loader>
                    <div className="container">
                        <div className="col-sm-6 col-md-3">
                            <div className="movie--isloading">
                                <div className="loading-image"></div>
                                <div className="loading-content">
                                    <div className="loading-text-container">
                                        <div className="loading-main-text"></div>
                                        <div className="loading-sub-text"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Loader>
                <Loader>
                    <div className="container">
                        <div className="col-sm-6 col-md-3">
                            <div className="movie--isloading">
                                <div className="loading-image"></div>
                                <div className="loading-content">
                                    <div className="loading-text-container">
                                        <div className="loading-main-text"></div>
                                        <div className="loading-sub-text"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Loader>
            </LoaderContainer>
        </>
    )
}

export default LoadingLatest;