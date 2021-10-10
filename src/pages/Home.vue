<template>
  <div>
    <!-- Hero -->
    <section class="mt-2" id="#">
      <div class="row align-items-center">
        <div class="col-12 col-md-5 col-lg-6">
          <p class="text-lg text-start text-md-start">
            Welcome to <span class="text-secondary">mea</span
            ><span style="color: #ff5c58">SURE</span>
          </p>
          <!-- <p class="text-lg font-weight-bold">
            mea<span style="color: #FF5C58">SURE</span>
          </p> -->
          <p class="text-secondary">
            A human body is 70% water and everyone would want their 70% water to
            be good water.
          </p>
          <a class="btn btn-primary btn-purple" href="/equality-demand"
            >Download our app now</a
          >
        </div>
        <div class="col-12 col-md-7 col-lg-6 d-flex justify-content-center">
          <img src="../assets/hero.png" alt="women illustration" height="350" />
        </div>
      </div>
    </section>

    <!-- solution -->
    <section class="mt-5" id="solution">
      <div class="row justify-content-center mb-3">
        <h1>Who Can Use Our Solution?</h1>
      </div>
      <div class="row align-items-center">
        <div class="col-12 col-md-6">
          <img
            src="../assets/ask.png"
            alt="women illustration"
            class="img-fluid"
          />
        </div>
        <div class="col-12 col-md-6">
          <p class="text-md">In short, anyone can use our solution.</p>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="mt-5" id="values">
      <div class="row justify-content-center">
        <h1>Our Values</h1>
      </div>
      <div class="row align-items-start">
        <div class="card-deck">
          <div class="card more-rounded">
            <img
              src="../assets/voice.png"
              class="card-img-top mx-auto"
              alt="voice"
            />
            <div class="card-body">
              <h5 class="card-title text-center">Voice</h5>
              <p class="card-text text-start">
                Seeing impurities and toxins measured in your water, your
                location, etc. gives you the tools to speak out, contact
                representatives, and make a change.
              </p>
            </div>
          </div>
          <div class="card more-rounded">
            <img
              src="../assets/health.png"
              class="card-img-top mx-auto"
              alt="health"
            />
            <div class="card-body">
              <h5 class="card-title text-center">Health</h5>
              <p class="card-text text-start">
                Having the information at your fingertips, knowing what you are
                consuming and how to correct water impurities.
              </p>
            </div>
          </div>
          <div class="card more-rounded">
            <img
              src="../assets/humanity.png"
              class="card-img-top mx-auto"
              alt="humanity"
            />
            <div class="card-body">
              <h5 class="card-title text-center">Humanity</h5>
              <p class="card-text text-start">
                You can directly supply clean water to people and towns that do
                not have the resources. Each purchase automatically funds a
                second device for those in need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  created() {
    document.title = "Home";
  },
};
</script>

<style scoped>
.text-lg {
  font-size: 2rem;
}

.text-md {
  font-size: 1.2rem;
}

.btn-purple {
  border: none;
  background-color: #fe8f8f;
}

.btn-purple:hover {
  background-color: #ff5c58;
}

.more-rounded {
  border-radius: 10px;
  border: none;
  box-shadow: 2px 2px 1px #fe8f8f;
}

.card-img-top {
  width: 100px;
  height: 100px;
}
</style>