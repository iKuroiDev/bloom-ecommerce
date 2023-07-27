<script>
  import { flip } from "svelte/animate";
  import { fly } from "svelte/transition";
  import { notifications } from "../stores/notificationStore";

  export let themes = {
    danger: "#E26D69",
    success: "#84C991",
    warning: "#f0ad4e",
    info: "#5bc0de",
    default: "#aaaaaa",
  };
</script>

<div class="notifications">
  {#each $notifications as notification (notification.id)}
    <div
      class="toast"
      style="background: {themes[notification.type]};"
      transition:fly={{ y: 30 }}
    >
      <div class="content">
        {#if notification.type === "success"}
          <i class="fas fa-check-circle" />
        {:else if notification.type === "warning"}
          <i class="fas fa-exclamation-triangle" />
        {/if}
        {notification.message}
      </div>
      {#if notification.icon}<i class={notification.icon} />{/if}
    </div>
  {/each}
</div>

<style>
  .notifications {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 0;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    pointer-events: none;
    max-width: 100%;
  }

  .toast {
    flex: 0 0 auto;
    margin-bottom: 10px;
  }

  .content {
    padding: 10px;
    display: block;
    color: white;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .notifications {
      right: 0;
    }
  }
</style>
