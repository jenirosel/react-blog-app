import './write.css'

export default function Write() {
  return (
    <div className="write">
      <img src="https://newevolutiondesigns.com/images/freebies/spring-facebook-cover-3.jpg" alt="" className="writeImg"/>
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" name="" id="fileInput" style={{display:"none"}} />
          <input type="text" name="" id="" placeholder="Title" className="writeInput" autoFocus={true} />
        </div>
        <div className="writeFormGroup">
          <textarea placeholder="Tell your story..." type="text" className="writeInput writeText" name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}
