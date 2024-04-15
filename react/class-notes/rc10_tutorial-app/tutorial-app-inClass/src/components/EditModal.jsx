import { useState } from "react"

const EditModal = ({editData}) => {

   const [title, setTitle] = useState (editData.title)
   const [description, setDescription] = useState(editData.description)
 
   const handleSubmit = (e) => {
   //   e.preventDefault()
   //   //TODO POST
   //   const newTutor = { title, description }
   //   postTutorial(newTutor)
   //   setTitle("")
   //   setDescription("")
   }


   return (
     <>

 
       <div
         className="modal fade"
         id="open-modal"
         tabIndex={-1}
         aria-labelledby="exampleModalLabel"
         aria-hidden="true"
       >
         <div className="modal-dialog">
           <div className="modal-content">
             <div className="modal-header">
               <h1 className="modal-title fs-5" id="exampleModalLabel">
                 Edit Tutorial
               </h1>
               <button
                 type="button"
                 className="btn-close"
                 data-bs-dismiss="modal"
                 aria-label="Close"
               />
             </div>
             <div className="modal-body">
             <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>


        <div className="modal-footer">
               <button
                 type="button"
                 className="btn btn-secondary mb-4"
                 data-bs-dismiss="modal"
               >
                 Close
               </button>
               <button type="submit" className="btn btn-danger mb-4">
          Submit
        </button>
             </div>

      </form>
             </div>
             
           </div>
         </div>
       </div>
     </>
   )
 }
 
 export default EditModal