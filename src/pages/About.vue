<template>
  <div>
    <section class="mt-5">
      <div class="row justify-content-center">
        <h1>Meet our team</h1>
      </div>
      <div class="row justify-content-center">
        <h5 class="text-secondary">
          We are a group of creative and innovative people to solve humanity
          problems
        </h5>
      </div>
    </section>
    <hr />

    <section class="mt-5">
      <div class="row">
        <div class="col-12 col-md-6 d-flex justify-content-center mt-2">
          <div class="card more-rounded">
            <img
              src="../assets/christine.png"
              class="card-img-top mx-auto"
              alt="voice"
            />
            <div class="card-body">
              <h5 class="card-title text-center">
                Christine Redhead (She/Her)
              </h5>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 d-flex justify-content-center mt-2">
          <div class="card more-rounded">
            <img
              src="../assets/rachel.png"
              class="card-img-top mx-auto"
              alt="voice"
            />
            <div class="card-body">
              <h5 class="card-title text-center">Rachel Eisner (She/Her)</h5>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 d-flex justify-content-center mt-2">
          <div class="card more-rounded">
            <img
              src="../assets/avatar.png"
              class="card-img-top mx-auto"
              alt="voice"
            />
            <div class="card-body">
              <h5 class="card-title text-center">Avnish Singh (He/Him)</h5>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 d-flex justify-content-center mt-2">
          <div class="card more-rounded">
            <img
              src="../assets/farhan.jpeg"
              class="card-img-top mx-auto"
              alt="voice"
            />
            <div class="card-body">
              <h5 class="card-title text-center">
                Farhan Anggara Putra Pratama (He/Him)
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-5">
      <div class="row justify-content-center">
        <h1>What matter to us</h1>
      </div>
    </section>
    <hr />

    <section class="mt-5">
      <div class="row">
        <div
          class="
            col-12 col-md-6
            d-flex
            justify-content-center
            align-items-center
          "
        >
          <img
            src="../assets/equality.png"
            class="img-about mx-auto"
            alt="voice"
          />
        </div>
        <div
          class="
            col-12 col-md-6
            d-flex
            justify-content-center
            align-items-center
          "
        >
          <p class="text-lg">
            We want to provide water equality, everyone should have access to
            good clean water and we taking a stand and going up against corporations that want to privatize our basic human rights.
          </p>
        </div>
      </div>
    </section>

    <section class="mt-5">
      <div class="row justify-content-center">
        <h1>What we do</h1>
      </div>
    </section>
    <hr />

    <section class="mt-5">
      <div class="row">
        <div
          class="
            col-12 col-md-6
            d-flex
            justify-content-center
            align-items-center
          "
        >
          <p class="text-lg">
            We provide our users with a platform to speak up and speak out against those who see us as just another number on a spreadsheet. We help hold these institutions accountable, through community and technological advancement.
          </p>
        </div>
        <div
          class="
            col-12 col-md-6
            d-flex
            justify-content-center
            align-items-center
          "
        >
          <img
            src="../assets/dashboard.png"
            class="img-about mx-auto"
            alt="voice"
          />
        </div>
      </div>
    </section>

    <section class="mt-5">
      <div class="row justify-content-center">
        <h1>How we do it</h1>
      </div>
    </section>
    <hr />

    <section class="mt-5">
      <div class="row">
        <div
          class="
            col-12 col-md-6
            d-flex
            justify-content-center
            align-items-center
          "
        >
          <img
            src="../assets/pc.png"
            class="img-about mx-auto"
            alt="voice"
          />
        </div>
        <div
          class="
            col-12 col-md-6
            d-flex
            justify-content-center
            align-items-center
          "
        >
          <p class="text-lg">
            We do it through TDS testing, geographical surveying (data is provided by our users), and your local state consensus.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    created(){
        document.title = 'About Us';
    }
}
</script>

<style scoped>
.more-rounded {
  border-radius: 10px;
  border: none;
  /* box-shadow: 2px 2px 3px grey; */
}

.text-lg {
  font-size: 1.5rem;
}

.card-img-top {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
}

.img-about {
    width: 250px;
  height: 250px;
}

.card {
  width: 25rem;
}
</style>