import React from 'react'
import { PrivateLayout } from '../Layouts'

const ActivitiesPage = () => {
    return (
        <PrivateLayout title='Activities page'>
            <div className="no-bottom no-top" id="content">
                <div id="top"></div>
                <section aria-label="section">
                    <div className="container">
                        <div className="row">



                            <div className="col-sm-4 col-md-3">
                                <div className="filter_box">
                                    <span className="filter__l">Filter</span>
                                    <span className="filter__r">Reset</span>
                                    <div className="spacer-half"></div>
                                    <div className="clearfix"></div>
                                    <ul className="activity-filter">
                                        <li className="filter_by_sales"><i className="fa fa-shopping-basket"></i>Sales</li>
                                        <li className="filter_by_likes"><i className="fa fa-heart"></i>Likes</li>
                                        <li className="filter_by_offers"><i className="fa fa-gavel"></i>Offers</li>
                                        <li className="filter_by_followings"><img src="images/check.svg" className="checkimg" />Followings</li>
                                    </ul>

                                </div>
                            </div>
                            <div className="col-sm-8 col-md-9">
                                <ul className="activity-list">
                                    <li className="act_follow">
                                        <img className="lazy" src="images/author/author-1.jpg" alt="" />
                                        <div className="act_list_text">
                                            <h4>Monica Lucas</h4>
                                            started following <a href="#">Gayle Hicks</a>
                                            <span className="act_list_date">
                                                10/07/2022, 12:40
                                            </span>
                                        </div>
                                    </li>
                                    <li className="act_sale">
                                        <img src="images/items/thumbnail-2.jpg" alt="" />
                                        <div className="act_list_text">
                                            <h4>Deep Sea Phantasy</h4>
                                            1 edition purchased by <a href="#">Stacy Long</a> for 0.001 ETH
                                            <span className="act_list_date">
                                                10/07/2022, 12:40
                                            </span>
                                        </div>
                                    </li>
                                    <li className="act_like">
                                        <img src="images/items/thumbnail-7.jpg" alt="" />
                                        <div className="act_list_text">
                                            <h4>Cute Astronout</h4>
                                            liked by <a href="#">Nicholas Daniels</a>
                                            <span className="act_list_date">
                                                10/07/2022, 12:40
                                            </span>
                                        </div>
                                    </li>
                                    <li className="act_follow">
                                        <img className="lazy" src="images/author/author-2.jpg" alt="" />
                                        <div className="act_list_text">
                                            <h4>Mamie Barnett</h4>
                                            started following <a href="#">Claude Banks</a>
                                            <span className="act_list_date">
                                                10/07/2022, 12:40
                                            </span>
                                        </div>
                                    </li>
                                    <li className="act_offer">
                                        <img src="images/items/thumbnail-5.jpg" alt="" />
                                        <div className="act_list_text">
                                            <h4>Purple Planet</h4>
                                            <a href="#">Franklin Greer</a> offered 0.002 ETH
                                            <span className="act_list_date">
                                                10/07/2022, 12:40
                                            </span>
                                        </div>
                                    </li>
                                    <li className="act_follow">
                                        <img className="lazy" src="images/author/author-3.jpg" alt="" />
                                        <div className="act_list_text">
                                            <h4>Nicholas Daniels</h4>
                                            started following <a href="#">Franklin Greer</a>
                                            <span className="act_list_date">
                                                10/07/2022, 12:40
                                            </span>
                                        </div>
                                    </li>
                                    <li className="act_sale">
                                        <img src="images/items/thumbnail-4.jpg" alt="" />
                                        <div className="act_list_text">
                                            <h4>Two Tigers</h4>
                                            1 edition purchased by <a href="#">Jimmy Wright</a> for 0.02 ETH
                                            <span className="act_list_date">
                                                10/07/2022, 12:40
                                            </span>
                                        </div>
                                    </li>
                                    <li className="act_like">
                                        <img src="images/items/thumbnail-6.jpg" alt="" />
                                        <div className="act_list_text">
                                            <h4>Cute Astronout</h4>
                                            liked by <a href="#">Karla Sharp</a>
                                            <span className="act_list_date">
                                                10/07/2022, 12:40
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>


            </div>

        </PrivateLayout>
    )
}

export default ActivitiesPage