<template>
  <div>
    <section class="mt-5">
      <div class="row justify-content-center">
        <h1>Meet our team</h1>
      </div>
      <div class="row justify-content-center">
        <h5 class="text-secondary">
          we are a group of creative and innovative people to solve humanity
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
              src="../assets/voice.png"
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
            We want to provide water equality, everyone should have access for
            good water quality and we want to going up against people who try to
            privatized water.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officia, sequi itaque voluptatum ex at, cupiditate delectus aliquam quo nostrum ea quis eos quas! Reiciendis iure blanditiis quaerat animi dolor!
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ex ipsum culpa rerum reprehenderit ducimus voluptates? Dolor, esse asperiores? Earum provident voluptatibus, saepe illum vel eligendi reprehenderit tempore illo suscipit.
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