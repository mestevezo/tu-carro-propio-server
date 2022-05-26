import styled from 'styled-components';

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #e3e3e3;
    z-index: 1000;
`
const LoaderContainer = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
margin: 5%;
margin-top: 15rem;
`

const Loader = styled.div`
 body {
  background: #e3e3e3;
}

.movie--isloading {
  width: 560px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 15px;
}

.movie--isloading .loading-image {
  height: 300px;
  background-image: -webkit-linear-gradient(left, #ececec 0px, #f4f4f4 40px, #ececec 80px);
  background-image: -o-linear-gradient(left, #ececec 0px, #f4f4f4 40px, #ececec 80px);
  background-image: linear-gradient(90deg, #ececec 0px, #f4f4f4 40px, #ececec 80px);
  -webkit-animation: shine-loading-image 2s infinite ease-out;
          animation: shine-loading-image 2s infinite ease-out;
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
  background-image: -webkit-linear-gradient(left, #ececec 0px, #ddd 40px, #ececec 80px);
  background-image: -o-linear-gradient(left, #ececec 0px, #ddd 40px, #ececec 80px);
  background-image: linear-gradient(90deg, #ececec 0px, #ddd 40px, #ececec 80px);
  background-size: 250px;
  border-radius: 10px;
  -webkit-animation: shine-loading-container-items 2s infinite ease-out;
          animation: shine-loading-container-items 2s infinite ease-out;
}

.movie--isloading .loading-content .loading-sub-text {
  height: 10px;
  width: 50%;
  background: #ececec;
  background-image: -webkit-linear-gradient(left, #ececec 0px, #ddd 40px, #ececec 80px);
  background-image: -o-linear-gradient(left, #ececec 0px, #ddd 40px, #ececec 80px);
  background-image: linear-gradient(90deg, #ececec 0px, #ddd 40px, #ececec 80px);
  background-size: 250px;
  border-radius: 10px;
  -webkit-animation: shine-loading-container-items 2s infinite ease-out;
          animation: shine-loading-container-items 2s infinite ease-out;
}

.movie--isloading .loading-content .loading-btn {
  width: 60px;
  height: 25px;
  background: #ececec;
  background-image: -webkit-linear-gradient(left, #ececec 0px, #ddd 40px, #ececec 80px);
  background-image: -o-linear-gradient(left, #ececec 0px, #ddd 40px, #ececec 80px);
  background-image: linear-gradient(90deg, #ececec 0px, #ddd 40px, #ececec 80px);
  background-size: 250px;
  border-radius: 3px;
  -webkit-animation: shine-loading-container-items 2s infinite ease-out;
          animation: shine-loading-container-items 2s infinite ease-out;
}


@-webkit-keyframes shine-loading-image {
  0% {
    background-position: -32px;
  }
  40%, 100% {
    background-position: 208px;
  }
}


@keyframes shine-loading-image {
  0% {
    background-position: -32px;
  }
  40%, 100% {
    background-position: 530px;
  }
}

@-webkit-keyframes shine-loading-container-items {
  0% {
    background-position: -100px;
  }
  40%, 100% {
    background-position: 100px;
  }
}

@keyframes shine-loading-container-items {
  0% {
    background-position: -100px;
  }
  40%, 100% {
    background-position: 200px;
  }
} `

const LoadingDots = () => {
  return (

    <>
      <Background>
        <LoaderContainer>
          <Loader>
            <div class="container">
              <div class="movie--isloading">
                <div class="loading-image"></div>
                <div class="loading-content">
                  <div class="loading-text-container">
                    <div class="loading-main-text"></div>
                    <div class="loading-sub-text"></div>
                  </div>
                </div>
              </div>
            </div>
          </Loader>
          <Loader>
            <div class="container">
              <div class="col-sm-6 col-md-3">
                <div class="movie--isloading">
                  <div class="loading-image"></div>
                  <div class="loading-content">
                    <div class="loading-text-container">
                      <div class="loading-main-text"></div>
                      <div class="loading-sub-text"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Loader>
          <Loader>
            <div class="container">
              <div class="col-sm-6 col-md-3">
                <div class="movie--isloading">
                  <div class="loading-image"></div>
                  <div class="loading-content">
                    <div class="loading-text-container">
                      <div class="loading-main-text"></div>
                      <div class="loading-sub-text"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Loader>
          <Loader>
            <div class="container">
              <div class="col-sm-6 col-md-3">
                <div class="movie--isloading">
                  <div class="loading-image"></div>
                  <div class="loading-content">
                    <div class="loading-text-container">
                      <div class="loading-main-text"></div>
                      <div class="loading-sub-text"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Loader>
        </LoaderContainer>
      </Background>
    </>
  )
}

export default LoadingDots;