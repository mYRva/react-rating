import {v4 as uuidv4} from 'uuid'
import {createContext, useState} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'this is feedback item 1',
            rating: 10,
        },
        {
            id: 2,
            text: 'this is feedback item 2',
            rating: 9,
        },
        {
            id: 3,
            text: 'this is feedback item 3',
            rating: 7,
        },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    //Add Feedback

    const addFeedBack = (newFeedBack) =>{
        newFeedBack.id = uuidv4()
        //console.log(newFeedBack)
        setFeedback([newFeedBack, ...feedback])
    }

    const deleteFeedback = (id) =>{
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }         
    }

    //Update Feedback item

    const updateFeedback = (id, updItem) =>{
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem }: item))
    }

    // Set item to be updated
    const editFeedback = (item) =>{
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return( 
        <FeedbackContext.Provider 
            value={{
                feedback,
                feedbackEdit,
                deleteFeedback,
                addFeedBack,
                editFeedback,
                updateFeedback
                
            }}
        >
            {children}
            
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext