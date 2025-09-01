import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProfile } from '../../../services/user'
import { Logout } from '../../../redux/feature/authSlice'
import { notification } from 'antd'

function Profile() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)
    const [isDeleting, setIsDeleting] = useState(false)
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
    const [deleteConfirmation, setDeleteConfirmation] = useState('')

    // Check if user is logged in
    useEffect(() => {
        if (!user) {
            notification.warning({
                message: 'Authentication Required',
                description: 'Please log in to access your profile.',
                duration: 5,
            })
            // Redirect to login if not authenticated
            setTimeout(() => {
                window.location.href = '/login'
            }, 2000)
        }
    }, [user])

    // Handle escape key to close modal
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape' && showDeleteConfirm) {
                setShowDeleteConfirm(false)
                setDeleteConfirmation('')
            }
        }

        if (showDeleteConfirm) {
            document.addEventListener('keydown', handleEscape)
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
        }
    }, [showDeleteConfirm])

    const handleDeleteProfile = async () => {
        if (deleteConfirmation !== 'DELETE') {
            notification.error({
                message: 'Error',
                description: 'Please type DELETE to confirm profile deletion',
                duration: 5,
            })
            return
        }

        try {
            setIsDeleting(true)
            const response = await deleteProfile()
            
            if (response.data.success) {
                notification.success({
                    message: 'Success',
                    description: 'Profile deleted successfully. You will be redirected to login.',
                    duration: 5,
                })
                
                // Clear Redux state and local storage, then redirect to login
                dispatch(Logout())
                localStorage.clear()
                setTimeout(() => {
                    window.location.href = '/'
                }, 2000)
            } else {
                notification.error({
                    message: 'Error',
                    description: response.data.message || 'Failed to delete profile',
                    duration: 5,
                })
            }
        } catch (error) {
            console.error('Delete profile error:', error)
            notification.error({
                message: 'Error',
                description: error.response?.data?.message || 'Failed to delete profile. Please try again.',
                duration: 5,
            })
        } finally {
            setIsDeleting(false)
            setShowDeleteConfirm(false)
            setDeleteConfirmation('')
        }
    }

    // Don't render if user is not logged in
    if (!user) {
        return (
            <div class="dash-9inn">
                <div class="dash-head">
                    <h1>Profile</h1>
                </div>
                <div class="profile_form wh-box edit_prof">
                    <div class="text-center py-4">
                        <p>Please log in to access your profile.</p>
                        <button class="btn btn-blue btn-lg" onClick={() => window.location.href = '/login'}>
                            Go to Login
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div class="dash-9inn">

                <div class="dash-head">
                    <h1>Edit Profile</h1>
                </div>
                <div class="profile_form wh-box edit_prof">
                    <form action="#">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label form="fname">First Name</label>
                                    <div class="form-wrap">
                                        <input type="text" class="form-control" value="" placeholder="Simon" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label form="fname">Last Name</label>
                                    <div class="form-wrap">
                                        <input type="text" class="form-control" value="" placeholder="Lewis" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label form="password">Gender</label>
                                    <div class="form-wrap">
                                        <select class="form-control">
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label form="fname">Email Address</label>
                                    <div class="form-wrap">
                                        <input type="text" class="form-control" value="" placeholder="Simon.lewis@gmail.com" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label form="fname">Phone Number</label>
                                    <div class="form-wrap">
                                        <input type="text" class="form-control" value="" placeholder="+1 (908) 1234 567" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label form="fname">Address</label>
                                    <div class="form-wrap">
                                        <input type="text" class="form-control" value="" placeholder="SanFrancisco, United States" />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="row">

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label form="password">Country</label>
                                    <div class="form-wrap">
                                        <select class="form-control">
                                            <option>USA</option>
                                            <option>UK</option>
                                            <option>UAE</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label form="password">State</label>
                                    <div class="form-wrap">
                                        <select class="form-control">
                                            <option>il</option>
                                            <option>ck</option>
                                            <option>la</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="row">


                            <div class="col-md-6">
                                <div class="form-group">
                                    <label form="fname">City</label>
                                    <div class="form-wrap">
                                        <input type="text" class="form-control" value="" placeholder="Boise" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label form="fname">Zip Code</label>
                                    <div class="form-wrap">
                                        <input type="text" class="form-control" value="" placeholder="123456" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-button  text-center">
                                    <button class="btn btn-blue btn-lg">Update My Profile</button>
                                    <button class="btn btn-transparent btn-lg">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Delete Profile Section */}
                <div class="profile_form wh-box edit_prof" style={{ 
                    marginTop: '20px',
                    border: '2px solid #dc3545',
                    backgroundColor: '#fff5f5'
                }}>
                    <div class="row">
                        <div class="col-md-12">
                            <h4 style={{ color: '#dc3545', marginBottom: '15px' }}>
                                <i class="fa fa-exclamation-triangle" style={{ marginRight: '10px' }}></i>
                                Danger Zone
                            </h4>
                            <div style={{ 
                                backgroundColor: '#fff3cd', 
                                border: '1px solid #ffeaa7', 
                                borderRadius: '5px', 
                                padding: '15px', 
                                marginBottom: '20px' 
                            }}>
                                <h6 style={{ color: '#856404', marginBottom: '10px' }}>
                                    <i class="fa fa-exclamation-triangle" style={{ marginRight: '8px' }}></i>
                                    Warning
                                </h6>
                                <ul style={{ color: '#856404', marginBottom: '0', paddingLeft: '20px' }}>
                                    <li>All your personal data will be permanently deleted</li>
                                    <li>Your account history and preferences will be lost</li>
                                    <li>This action cannot be undone</li>
                                    <li>You will be logged out and redirected to the home page</li>
                                </ul>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <button 
                                    class="btn btn-danger btn-lg" 
                                    onClick={() => {
                                        setShowDeleteConfirm(true)
                                        setDeleteConfirmation('')
                                    }}
                                    disabled={isDeleting}
                                    style={{
                                        boxShadow: '0 4px 8px rgba(220, 53, 69, 0.3)',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {isDeleting ? 'Deleting...' : 'Delete Profile'}
                                </button>
                                <p style={{ 
                                    color: '#6c757d', 
                                    fontSize: '14px', 
                                    marginTop: '10px',
                                    fontStyle: 'italic'
                                }}>
                                    This action requires additional confirmation
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Delete Confirmation Modal */}
                {showDeleteConfirm && (
                    <div class="modal-overlay" style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000,
                        opacity: 1,
                        transition: 'opacity 0.3s ease-in-out'
                    }}>
                        <div class="modal-content" style={{
                            backgroundColor: 'white',
                            padding: '30px',
                            borderRadius: '12px',
                            maxWidth: '500px',
                            width: '90%',
                            textAlign: 'center',
                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                            border: '2px solid #dc3545',
                            transform: 'translateY(0)',
                            transition: 'transform 0.3s ease-out'
                        }}>
                            <h3 style={{ color: '#dc3545', marginBottom: '20px' }}>Delete Profile</h3>
                            <p style={{ marginBottom: '20px' }}>
                                Are you sure you want to delete your profile? This action cannot be undone and will permanently remove all your data.
                            </p>
                            <div style={{ marginBottom: '25px' }}>
                                <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
                                    Type "DELETE" to confirm:
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    value={deleteConfirmation}
                                    onChange={(e) => setDeleteConfirmation(e.target.value)}
                                    placeholder="Type DELETE to confirm"
                                    style={{ textAlign: 'center', fontSize: '16px' }}
                                />
                            </div>
                            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                                <button 
                                    class="btn btn-secondary btn-lg"
                                    onClick={() => {
                                        setShowDeleteConfirm(false)
                                        setDeleteConfirmation('')
                                    }}
                                    disabled={isDeleting}
                                >
                                    Cancel
                                </button>
                                <button 
                                    class="btn btn-danger btn-lg"
                                    onClick={handleDeleteProfile}
                                    disabled={isDeleting || deleteConfirmation !== 'DELETE'}
                                    style={{
                                        opacity: deleteConfirmation === 'DELETE' ? 1 : 0.6,
                                        cursor: deleteConfirmation === 'DELETE' ? 'pointer' : 'not-allowed'
                                    }}
                                >
                                    {isDeleting ? 'Deleting...' : 'Yes, Delete My Profile'}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </>
    )
}

export default Profile