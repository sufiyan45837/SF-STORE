import React from 'react'

const error = () => {
  return (
    <Route
          path="*"
          element={
            <div className="text-9xl ml-[22%] pt-52 font-bold">
              404 Not Found Under Working
              <h2 className="text-3xl ml-20 pt-10 text-amber-900">
                Your visited page not found. You may go home page.
              </h2>
              <button
                type="button"
                className="text-2xl bg-orange-900 ml-60"
                style={{ border: "3px solid black" }}
                onClick={goToHome}  // Call the goToHome function
              >
                Back To Homepage
              </button>
            </div>
          }
        />
  )
}

export default error