<template>
  <div>
    <base-header type="" id="table-head"> </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col">
          <!-- <estimates-table title="Light Table" :estimates="estimates" @edit:estimate="editEstimate"></estimates-table>                     -->
          <estimates-table :estimates="estimates"></estimates-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import EstimatesTable from "./Tables/ListOfEstimatesTable";
import CreateEstimateForm from "./Forms/CreateEstimateForm";
import axios from "axios";
import service from "../services/AuthService";
import router from "../router";
export default {
  name: "estimates",
  components: {
    EstimatesTable
  },
  data() {
    return {
      estimates: []
    };
  },
  //fetches estimates when the component is created
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      router.push("/");
    }
    try {
      // Getting the id of the loggedInProjectManager and showing estimate requests specific to them
      const loggedInProjectManager = this.$store.getters.getUser.id;
      const res = await axios.get( `http://localhost:8081/api/estimate-requests/` + loggedInProjectManager );
      this.estimates = res.data;

      console.log(this.estimates);
    } catch (e) {
      // console.error(e)
    }
  }
};
</script>
<style>
#table-head {
  background-color: #d10572;
  height: 35vh;
}
</style>
