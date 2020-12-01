<template>
  <div class="axios">
    <button @click="serverOn">Server On</button>
    <button @click="createSession">Create Session</button>
    <button @click="confirmSession">Confirm Session</button>
    <button @click="deleteSession">Delete Session</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  setup() {
    const serverOn = () => {
      axios.get("/api");
    };
    const createSession = () => {
      axios.get("/api/session");
    };

    const confirmSession = () => {
      axios.get("/api/confirmSession");
    };

    const deleteSession = () => {
      axios.get("/api/deleteSession");
    };

    return {
      serverOn,
      createSession,
      confirmSession,
      deleteSession
    };
  }
};
</script>

<style lang="scss" scoped>
.axios {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    margin: 10px;
    padding: 10px;
  }
}
</style>
