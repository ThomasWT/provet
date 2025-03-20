import { test, expect } from '@playwright/test'
import type { Page } from '@playwright/test'

test.describe('Signup Flow', () => {
  test.beforeEach(async ({ page }: { page: Page }) => {
    // Navigate to the signup page before each test
    await page.goto('/signup')
  })

  test('should switch between languages', async ({ page }: { page: Page }) => {
    // Check initial English state
    await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible()
    await expect(page.locator('provet-input[name="email"]')).toHaveAttribute('label', 'E-mail')
    await expect(page.locator('provet-input[name="password"]')).toHaveAttribute('label', 'Password')
    await expect(page.locator('provet-input[name="repeat-password"]')).toHaveAttribute('label', 'Repeat password')

    // Switch to Finnish
    await page.locator('provet-dropdown').click()
    await page.locator('provet-dropdown-item').filter({ hasText: 'Suomi' }).click()

    // Check Finnish translations
    await expect(page.getByRole('button', { name: 'Rekisteröidy' })).toBeVisible()
    await expect(page.locator('provet-input[name="email"]')).toHaveAttribute('label', 'Sähköposti')
    await expect(page.locator('provet-input[name="password"]')).toHaveAttribute('label', 'Salasana')
    await expect(page.locator('provet-input[name="repeat-password"]')).toHaveAttribute('label', 'Toista salasana')

    // Switch back to English
    await page.locator('provet-dropdown').click()
    await page.locator('provet-dropdown-item').filter({ hasText: 'English' }).click()

    // Verify English translations are back
    await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible()
    await expect(page.locator('provet-input[name="email"]')).toHaveAttribute('label', 'E-mail')
    await expect(page.locator('provet-input[name="password"]')).toHaveAttribute('label', 'Password')
    await expect(page.locator('provet-input[name="repeat-password"]')).toHaveAttribute('label', 'Repeat password')
  })

  test('should display signup form with all required fields', async ({ page }: { page: Page }) => {
    // Check if all form elements are present
    await expect(page.locator('provet-input[name="email"] input')).toBeVisible()
    await expect(page.locator('provet-input[name="password"] input')).toBeVisible()
    await expect(page.locator('provet-input[name="repeat-password"] input')).toBeVisible()
    await expect(page.locator('provet-checkbox[name="signup-updates"] input')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible()
  })

  test('should show validation errors for empty form submission', async ({ page }: { page: Page }) => {
    // Try to submit the form without filling any fields
    await page.getByRole('button', { name: 'Sign Up' }).click()

    // Check for validation error messages
    await expect(page.locator('provet-input[name="email"]')).toHaveAttribute('error', 'Please enter your email')
    await expect(page.locator('provet-input[name="password"]')).toHaveAttribute('error', 'Please enter a password')
    await expect(page.locator('provet-input[name="repeat-password"]')).toHaveAttribute('error', 'Please repeat your password')
  })

  test('should validate email format', async ({ page }: { page: Page }) => {
    // Fill in invalid email
    await page.locator('provet-input[name="email"] input').fill('invalid-email')
    await page.locator('provet-input[name="email"] input').blur()

    // Check for email validation error
    await expect(page.locator('provet-input[name="email"]')).toHaveAttribute('error', 'Invalid email')

    // Fill in valid email
    await page.locator('provet-input[name="email"] input').fill('test@example.com')
    await page.locator('provet-input[name="email"] input').blur()

    // Check that error is gone
    await expect(page.locator('provet-input[name="email"]')).not.toHaveAttribute('error')
  })

  test('should validate password requirements', async ({ page }: { page: Page }) => {
    // Fill in short password
    await page.locator('provet-input[name="password"] input').fill('short')
    await page.locator('provet-input[name="password"] input').blur()

    // Check for password validation error
    await expect(page.locator('provet-input[name="password"]')).toHaveAttribute('error', 'Minimum of 6 characters required')

    // Fill in valid password
    await page.locator('provet-input[name="password"] input').fill('validpassword123')
    await page.locator('provet-input[name="password"] input').blur()

    // Check that error is gone
    await expect(page.locator('provet-input[name="password"]')).not.toHaveAttribute('error')
  })

  test('should validate password match', async ({ page }: { page: Page }) => {
    // Fill in different passwords
    await page.locator('provet-input[name="password"] input').fill('password123')
    await page.locator('provet-input[name="repeat-password"] input').fill('differentpassword')
    await page.locator('provet-input[name="repeat-password"] input').blur()

    // Check for password match error
    await expect(page.locator('provet-input[name="repeat-password"]')).toHaveAttribute('error', 'Passwords do not match')

    // Fill in matching passwords
    await page.locator('provet-input[name="repeat-password"] input').fill('password123')
    await page.locator('provet-input[name="repeat-password"] input').blur()

    // Check that error is gone
    await expect(page.locator('provet-input[name="repeat-password"]')).not.toHaveAttribute('error')
  })

  test('should toggle password visibility', async ({ page }: { page: Page }) => {
    // Fill in passwords
    await page.locator('provet-input[name="password"] input').fill('password123')
    await page.locator('provet-input[name="repeat-password"] input').fill('password123')

    // Check initial state (passwords are hidden)
    await expect(page.locator('provet-input[name="password"] input')).toHaveAttribute('type', 'password')
    await expect(page.locator('provet-input[name="repeat-password"] input')).toHaveAttribute('type', 'password')

    // Toggle password visibility for both fields
    await page.locator('provet-input[name="password"] provet-icon').click()
    await page.locator('provet-input[name="repeat-password"] provet-icon').click()

    // Check that passwords are visible
    await expect(page.locator('provet-input[name="password"] input')).toHaveAttribute('type', 'text')
    await expect(page.locator('provet-input[name="repeat-password"] input')).toHaveAttribute('type', 'text')

    // Toggle back to hidden
    await page.locator('provet-input[name="password"] provet-icon').click()
    await page.locator('provet-input[name="repeat-password"] provet-icon').click()

    // Check that passwords are hidden again
    await expect(page.locator('provet-input[name="password"] input')).toHaveAttribute('type', 'password')
    await expect(page.locator('provet-input[name="repeat-password"] input')).toHaveAttribute('type', 'password')
  })

  test('should successfully submit form with valid data', async ({ page }: { page: Page }) => {
    // Fill in valid form data
    await page.locator('provet-input[name="email"] input').fill('test@example.com')
    await page.locator('provet-input[name="password"] input').fill('password123')
    await page.locator('provet-input[name="repeat-password"] input').fill('password123')
    await page.locator('provet-checkbox[name="signup-updates"] input').check()

    // Submit the form
    await page.getByRole('button', { name: 'Sign Up' }).click()

    // Check for loading state
    await expect(page.getByRole('button', { name: 'Sign Up' })).toBeDisabled()

    // Wait for success state
    await expect(page.getByTestId('signup-success')).toBeVisible()
  })
}) 