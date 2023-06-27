/* eslint-disable */
import React, { useEffect, useState, Fragment, useContext, FC } from "react";
import BaseLayout from "../../components/BaseLayout";
import AxiosConfig from "../../AxiosConfig";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { ITag } from "../../interfaces";
import { Rings } from "react-loader-spinner";
import { useToasts } from "react-toast-notifications";
import { indianCities } from "../../commons/constents";
interface ICustomTag {
  label: string;
  value: string | number;
}

const PostJobPage: FC = () => {
  const [tags, setTags] = useState([
    { value: "anyone", label: "Anyone" },
    { value: "good-communication", label: "Good Communication" },
  ]);
  const [types, setTypes] = useState([
    { value: "remote", label: "Remote" },
    { value: "on-site", label: "On-site" },
    { value: "Internship", label: "Internship" },
  ]);
  const [categories, setCategories] = useState([
    { value: "bpo", label: "BPO" },
    { value: "web-design", label: "Web design" },
    { value: "graphic-design", label: "Graphic design" },
    { value: "web-development", label: "Web development" },
    { value: "human-resource", label: "Human Resources" },
    { value: "support", label: "Support" },
    { value: "android", label: "Android Development" },
  ]);
  const allStates = Object.keys(indianCities);

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [salary, setSalary] = useState<number>();
  const [job_tags, setJobTags] = useState<ICustomTag[]>([]);
  const [location, setLocation] = useState<string>();
  const [state, setState] = useState<string>("");
  const [type, setType] = useState<string>();
  const [category, setCategory] = useState<string>();
  const [last_date, setLastDate] = useState<Date>();
  const [company_name, setCompanyName] = useState<string>();
  const [company_description, setCompanyDescription] = useState<string>();
  const [website, setWebsite] = useState<string>();
  const authContext = useContext(AuthContext);
  const { token, isAuthenticated } = authContext.state;
  const { addToast } = useToasts();
  const [isNavigate, setIsNavigate] = useState<boolean>(false);

  useEffect(() => {
    // setLoading(true);
    // AxiosConfig.get('tags/')
    //     .then(res => {
    //         let my_tags: ICustomTag[] = [];
    //         res.data.forEach((tag: ITag) => my_tags.push({"value": tag.id, "label": tag.name}));
    //         console.log('tag',my_tags)
    //         setTags(my_tags);
    //         setLoading(false);
    //     }).catch(err => addToast(err, {appearance: 'error'}))
  }, []);

  const animatedComponents = makeAnimated();

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setSalary(undefined);
    setJobTags([]);
    setLocation("");
    setState("");
    setType("");
    setCategory("");
    setLastDate(undefined);
    setCompanyName("");
    setCompanyDescription("");
    setWebsite("");
  };

  const handleSubmit: React.MouseEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const new_job_data = {
      title: title,
      description: description,
      tags: job_tags,
      salary: salary,
      city: location,
      type: type,
      category: category,
      // 'last_date': last_date,
      company: company_name,
      company_description: company_description,
      // 'website': website,
    };

    console.log("new_job_data", new_job_data);

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    AxiosConfig.post(`/jobs/`, new_job_data, config)
      .then((res) => {
        console.log("post job res", res);
        addToast("Job were successfully posted", { appearance: "success" });
        // setIsNavigate(true);
        resetForm();
      })
      .catch((err) => {
        console.log("post job err", err);
        addToast("Something went wrong!", { appearance: "error" });
      });
  };

  const handleSkillsChange = (selectedOptions: any) => {
    let my_tags: ICustomTag[] = selectedOptions.map(
      (selected: any) => selected.value
    );
    setJobTags([...my_tags]);
  };

  if (isNavigate) {
    return <Navigate to="/" />;
  }

  console.log("post job page");

  return (
    <BaseLayout title={"Post new job"}>
      {/* <h1>post job </h1> */}

      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-header">
                <h3>Post A Job</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-12 col-xs-12">
              <div className="post-job box">
                <div className="text-center justify-content-center align-self-center">
                  <Rings
                    // type="Grid"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    visible={loading}
                  />
                </div>
                {!loading && (
                  <Fragment>
                    <h3 className="job-title">Post a new Job</h3>
                    <form className="form-ad" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label className="control-label">Job Title</label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={(event) => setTitle(event.target.value)}
                          required
                          placeholder="Write job title"
                        />
                      </div>
                      <div className="form-group">
                        <label className="control-label">Job Description</label>
                        <textarea
                          className="form-control"
                          placeholder="Write job description"
                          onChange={(event) =>
                            setDescription(event.target.value)
                          }
                          required
                          rows={4}
                        />
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="control-label">Salary</label>
                            <input
                              type="number"
                              className="form-control"
                              onChange={(event) =>
                                setSalary(Number(event.target.value))
                              }
                              required
                              placeholder="Salary"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="control-label">
                              Required skills
                            </label>
                            <Select
                              closeMenuOnSelect={false}
                              components={animatedComponents}
                              // defaultValue={[colourOptions[4], colourOptions[5]]}
                              isMulti
                              options={tags}
                              className="React"
                              classNamePrefix="select"
                              onChange={handleSkillsChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label">Location</label>
                        <select
                          className="form-control"
                          onChange={(event) => setState(event.target.value)}
                          required
                        >
                          <option value="">Select a state</option>
                          {allStates.map((state, index) => (
                            <option key={index} value={state}>
                              {state}
                            </option>
                          ))}
                        </select>
                      </div>
                      {state ? (
                        <div className="form-group">
                          <label className="control-label">City</label>
                          <select
                            className="form-control"
                            onChange={(event) =>
                              setLocation(event.target.value)
                            }
                            required
                          >
                            <option value="">Select a city</option>
                            {indianCities[state].map((city, index) => (
                              <option key={index} value={city}>
                                {city}
                              </option>
                            ))}
                          </select>
                        </div>
                      ) : (
                        ""
                      )}
                      <div className="row">
                        {/* <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="control-label">Company</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                onChange={event => setCompanyName(event.target.value)}
                                                                required
                                                                placeholder="Write company name"/>
                                                        </div>
                                                    </div> */}
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="control-label">Type</label>
                            <div className="search-category-container">
                              <Select
                                className="React"
                                classNamePrefix="select"
                                name="type"
                                onChange={(type: any) => setType(type.value)}
                                required
                                options={types}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-md-6">
                          <label className="control-label">Category</label>
                          <div className="search-category-container">
                            <Select
                              className="React"
                              classNamePrefix="select"
                              name="category"
                              onChange={(category: any) =>
                                setCategory(category.value)
                              }
                              required
                              options={categories}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        {/* <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="control-label">Apply URL <span>(users will apply on your website)</span></label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                onChange={event => setWebsite(event.target.value)}
                                                                required
                                                                placeholder="Apply URL"/>
                                                        </div>
                                                    </div> */}
                        {/* <div className="col-md-6">
                          <label className="control-label">
                            Validity of the post
                          </label>
                          <Flatpickr
                            className="form-control"
                            value={new Date()}
                            options={{ minDate: new Date() }}
                            required
                            onChange={(date) => setLastDate(date[0])}
                          />
                        </div> */}
                      </div>
                      <div className="form-group">
                        <label className="control-label">Company details</label>
                      </div>
                      <div className="form-group">
                        <label className="control-label">Company name</label>
                        <input
                          type="text"
                          className="form-control"
                          required
                          onChange={(event) =>
                            setCompanyName(event.target.value)
                          }
                          placeholder="Company name"
                        />
                      </div>
                      <div className="form-group">
                        <label className="control-label">
                          Company description
                        </label>
                        <textarea
                          className="form-control"
                          required
                          rows={6}
                          onChange={(event) =>
                            setCompanyDescription(event.target.value)
                          }
                          placeholder="Company description"
                        />
                      </div>
                      <button
                        type="submit"
                        hidden={submitted}
                        className="btn btn-primary log-btn"
                      >
                        Submit your job
                      </button>
                      <button
                        type="submit"
                        hidden={!submitted}
                        className="btn btn-primary log-btn"
                      >
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        />
                        Submitting...
                      </button>
                    </form>
                  </Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default PostJobPage;
