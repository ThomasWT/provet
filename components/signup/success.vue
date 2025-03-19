<template>
    <div data-testid="signup-success" class="success-container">
        <provet-stack  direction="vertical" justify-content="center" align-items="center" gap="xl">
            <provet-stack direction="vertical" justify-content="center" align-items="center" gap="s">
                <h2 class="n-font-size-xxxl fade-in-up">{{ $t('success') }}</h2>
                <p class="n-font-size-m fade-in-up" style="max-width: 70%;text-align: center;">{{ $t('weHaveReceivedYourRequestAndWillGetBackToYouAsSoonAsPossible') }}</p>
            </provet-stack>
            <svg class="fade-in-up" width="120px" height="120px" viewBox="0 0 133 133" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="check-group" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <circle id="filled-circle" fill="#78B348" cx="66.5" cy="66.5" r="54.5"></circle>
                <circle id="white-circle" fill="#FFFFFF" cx="66.5" cy="66.5" r="55.5"></circle>
                <circle id="outline" stroke="#78B348" stroke-width="4" cx="66.5" cy="66.5" r="54.5"></circle>
                    <polyline id="check" stroke="#FFFFFF" stroke-width="4" points="41 70 56 85 92 49"></polyline>
                </g>
            </svg>
            <provet-button class="fade-in-up" variant="primary" expand>{{ $t('backToHome') }}</provet-button>
        </provet-stack>
    </div>
</template>

<style scoped>
@keyframes outline {
    from {
      stroke-dasharray: 0, 345.576px;
    }
    to {
      stroke-dasharray: 345.576px, 345.576px;
    }
  }
  #outline {
    animation: 0.38s ease-in outline;
    transform: rotate(0deg);
    transform-origin: center;
  }
  
  @keyframes circle {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0);
    }
  }

  #white-circle {
    animation: 0.35s ease-in 0.35s forwards circle;
    transform: none;
    transform-origin: center;
  }
  
  @keyframes check {
    from {
      stroke-dasharray: 0, 75px;
    }
    to {
      stroke-dasharray: 75px, 75px;
    }
  }
  #check {
    animation: 0.34s cubic-bezier(0.65, 0, 1, 1) 0.8s forwards check;
    stroke-dasharray: 0, 75px;
  }
  
  @keyframes check-group {
    from {
      transform: scale(1);
    }
    50% {
      transform: scale(1.09);
    }
    to {
      transform: scale(1);
    }
  }

  #check-group {
    animation: 0.32s ease-in-out 1.03s check-group;
    transform-origin: center;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fade-in-up {
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards;
  }

  h2.fade-in-up {
    animation-delay: 0.2s;
  }

  p.fade-in-up {
    animation-delay: 0.4s;
  }

  svg.fade-in-up {
    animation-delay: 0.6s;
  }

  .provet-button.fade-in-up {
    animation-delay: 1s;
  }
</style>