<template>
    <Transition name="fade" mode="out-in">
        <form v-if="!isSuccess" @submit.prevent="signup" class="n-stack n-gap-xl" id="signup-form">
            <provet-fieldset>
                <provet-stack>
                    <provet-input placeholder="example@email.com" id="email" type="email" name="email" :label="$t('email')"
                        autocomplete="email" @input="formValidation.email.val = $event.target?.value" @blur="isEmailValid"
                        :error="formValidation.email.error" required expand></provet-input>

                    <provet-input placeholder="••••••••" id="password" :type="showPassword ? 'text' : 'password'"
                        name="password" :label="$t('password')" @input="formValidation.password.val = $event.target?.value"
                        @blur="isPasswordValid" :error="formValidation.password.error" autocomplete="current-password"
                        required expand>
                        <provet-stack slot="end" align-items="center" style="margin: var(--n-space-sm) auto">
                            <provet-icon aria-describedby="password-tooltip" class="password-toggle"
                                @click.prevent="togglePassword('password')" size="m"
                                :color="showPassword ? 'var(--n-color-accent)' : ''" :name="getPasswordIcon(showPassword)"></provet-icon>
                        </provet-stack>
                    </provet-input>

                    <provet-input placeholder="••••••••" id="repeat-password"
                        :type="showRepeatPassword ? 'text' : 'password'" name="repeat-password" :label="$t('repeatPassword')"
                        @input="formValidation.repeatPassword.val = $event.target?.value" @blur="isRepeatPasswordValid"
                        :error="formValidation.repeatPassword.error" autocomplete="current-password" required expand>
                        <provet-stack slot="end" align-items="center" style="margin: var(--n-space-sm) auto">
                            <provet-icon aria-describedby="password-tooltip" class="password-toggle"
                                @click.prevent="togglePassword('repeat-password')" size="m"
                                :color="showRepeatPassword ? 'var(--n-color-accent)' : ''"
                                :name="getPasswordIcon(showRepeatPassword)"></provet-icon>
                        </provet-stack>
                    </provet-input>
                    <provet-tooltip id="password-tooltip">{{ showPassword ? $t('hidePassword') : $t('showPassword') }}</provet-tooltip>
                    <provet-checkbox id="signup-updates" name="signup-updates" size="m"
                        :label="$t('receiveOccasionalProductUpdatesAndAnnouncements')"
                        v-model="signupUpdates"></provet-checkbox>
                </provet-stack>
            </provet-fieldset>
            <div class="n-stack n-gap-s">
                <provet-button :disabled="!isFormValid" variant="primary" type="submit" :loading="isLoading" expand>{{ $t('signup') }}
                </provet-button>
                <NuxtLink to="#" class="login-link n-font-size-m n-color-text-link">{{ $t('alreadyHaveAnAccount') }}</NuxtLink>
            </div>
        </form>
        <SignupSuccess v-else />
    </Transition>
</template>

<script setup lang="ts">
import '@provetcloud/web-components/lib/Input'
import '@provetcloud/web-components/lib/Checkbox'
import '@provetcloud/web-components/lib/Fieldset'
import '@provetcloud/web-components/lib/Button'
import '@provetcloud/web-components/lib/Stack'
import '@provetcloud/web-components/lib/Icon'
import '@provetcloud/web-components/lib/Fieldset'
import '@provetcloud/web-components/lib/Divider'
import '@provetcloud/web-components/lib/Tooltip'

const { t, locale } = useI18n()

interface InputValidation {
    dirty: boolean,
    val: string,
    error: string | undefined,
}

interface FormValidation {
    email: InputValidation,
    password: InputValidation,
    repeatPassword: InputValidation,
}

// If the password is shown.
const showPassword = ref(false)
const showRepeatPassword = ref(false)

// If the form is loading.
const isLoading = ref(false)

const isSuccess = ref(false)

// The form validation object.
const formValidation = reactive<FormValidation>({
    email: {
        dirty: false,
        val: '',
        error: undefined,
    },
    password: {
        dirty: false,
        val: '',
        error: undefined,
    },
    repeatPassword: {
        dirty: false,
        val: '',
        error: undefined,
    }
})

// If the user wants to receive occasional product updates and announcements.
const signupUpdates = ref(false)

const togglePassword = (passwordInput: string): void => {
    switch (passwordInput) {
        case 'password':
            showPassword.value = !showPassword.value
            break
        case 'repeat-password':
            showRepeatPassword.value = !showRepeatPassword.value
            break
    }
}

const signup = (): void => {
    // Validate all fields before submitting
    isEmailValid()
    isPasswordValid()
    isRepeatPasswordValid()

    // Check if there are any validation errors
    if (formValidation.email.error || formValidation.password.error || formValidation.repeatPassword.error) {
        return
    }

    isLoading.value = true

    // Simulate a loading state for 1.2 seconds
    setTimeout(() => {
        isLoading.value = false
        isSuccess.value = true
    }, 1200)
}

const getPasswordIcon = (isVisible: boolean): string => {
    return isVisible ? 'interface-edit-off' : 'interface-edit-on'
}

const isEmailValid = (): boolean => {
    // If the email is dirty, we need to validate it. Otherwise user haven't typed anything yet.
    if (formValidation.email.dirty) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        formValidation.email.error = emailRegex.test(formValidation.email.val) ? undefined : t('invalidEmail')
    }

    // If the email is empty, we need to show an error message
    if (formValidation.email.val == '') {
        formValidation.email.error = t('pleaseEnterYourEmail')
    }
    return true
}

const isPasswordValid = (): boolean => {
    // If the password is dirty, we need to validate it. Otherwise user haven't typed anything yet.
    if (formValidation.password.dirty) {
        let isPasswordAbove6Chars = formValidation.password.val.length >= 6
        formValidation.password.error = isPasswordAbove6Chars ? undefined : t('minimumOf6CharactersRequired')
    }

    // If the password is empty, we need to show an error message
    if (formValidation.password.val == '') {
        formValidation.password.error = t('pleaseEnterAPassword')
    }
    return true
}

const isRepeatPasswordValid = (): boolean => {
    // If the repeat password is dirty, we need to validate it. Otherwise user haven't typed anything yet.
    if (formValidation.repeatPassword.dirty) {
        // Check if the repeat password matches the password
        const isPasswordMatch = formValidation.repeatPassword.val === formValidation.password.val
        formValidation.repeatPassword.error = isPasswordMatch ? undefined : t('passwordsDoNotMatch')
    }
    // If the repeat password is empty, we need to show an error message
    if (formValidation.repeatPassword.val === '') {
        formValidation.repeatPassword.error = t('pleaseRepeatYourPassword')
    }
    return true
}

// This is a watch that will trigger when the email or password input is changed to make sure it's marked as dirty.
// Marking the input field as dirty is to avoid showing the error message when the user hasn't typed anything yet.
watch(() => [formValidation.email.val, formValidation.password.val, formValidation.repeatPassword.val],
    ([newEmail, newPassword, newRepeatPassword]) => {
        if (newEmail) {
            formValidation.email.dirty = true
            if (formValidation.email.error) {
                isEmailValid()
            }
        }
        if (newPassword) {
            formValidation.password.dirty = true
            if (formValidation.password.error) {
                isPasswordValid()
            }
            // If password changes, revalidate repeat password
            if (formValidation.repeatPassword.dirty) {
                isRepeatPasswordValid()
            }
        }
        if (newRepeatPassword) {
            formValidation.repeatPassword.dirty = true
            if (formValidation.repeatPassword.error) {
                isRepeatPasswordValid()
            }
        }
    })

const isFormValid = computed((): boolean => {
    const hasErrors = formValidation.email.error || formValidation.password.error || formValidation.repeatPassword.error
    const isDirty = formValidation.email.dirty || formValidation.password.dirty || formValidation.repeatPassword.dirty
    return !(hasErrors && isDirty)
})

watch(locale, () => {
    // Update error messages to reflect the new language
    if (formValidation.email.error) {
        isEmailValid()
    }
    if (formValidation.password.error) {
        isPasswordValid()
    }
    if (formValidation.repeatPassword.error) {
        isRepeatPasswordValid()
    }
})

//Composable for the cat.
const useCatComposable = useCat();

// Watch the showPassword variable to toggle the cat's vision.
watch([showPassword, showRepeatPassword], ([newShowPassword, newShowRepeatPassword]) => {
    useCatComposable.setDontLook(newShowPassword || newShowRepeatPassword);
})

</script>

<style scoped>

#signup-form {
    width: 100%;
    max-width: 300px;
}

.password-toggle {
    cursor: pointer;
    pointer-events: auto;
}

.login-link {
    text-align: center;
    margin-top: var(--n-space-s);
}

provet-tooltip {
    --n-tooltip-z-index: 1;
}

@media (max-width: 400px) {
    #login-form {
        padding: 1rem;
    }
}

/* Transition styles */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>