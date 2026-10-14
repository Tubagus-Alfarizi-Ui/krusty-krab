import { useState } from 'react'
import './App.css'

function App() {
  const [showPassword, setShowPassword] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="login-page">
      <section className="login-card" aria-labelledby="login-title">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">K</span>
          <span>Krusty Krab</span>
        </div>

        <div className="login-heading">
          <p className="eyebrow">SELAMAT DATANG KEMBALI</p>
          <h1 id="login-title">Masuk ke akunmu</h1>
          <p className="subtitle">Masukkan akun baru untuk kamu.</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label className="field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="nama@email.com"
              autoComplete="email"
              required
            />
          </label>

          <label className="field">
            <span>Kata sandi</span>
            <span className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Masukkan kata sandi"
                autoComplete="current-password"
                required
              />
              <button
                className="password-toggle"
                type="button"
                onClick={() => setShowPassword((visible) => !visible)}
                aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
              >
                {showPassword ? 'Sembunyikan' : 'Lihat'}
              </button>
            </span>
          </label>

          <div className="form-options">
            <label className="remember-option">
              <input type="checkbox" name="remember" />
              <span>Ingat saya</span>
            </label>
            <span className="forgot-hint">Lupa kata sandi? Hubungi admin.</span>
          </div>

          <button className="submit-button" type="submit">Masuk</button>

          {submitted && (
            <p className="form-message" role="status">
              Form demo berhasil diisi. Autentikasi belum terhubung ke server.
            </p>
          )}
        </form>

        <p className="login-footer">Belum punya akun? <span>Hubungi admin</span></p>
      </section>

      <p className="page-caption">Tempat terbaik untuk menikmati Krabby Patty.</p>
    </main>
  )
}

export default App
