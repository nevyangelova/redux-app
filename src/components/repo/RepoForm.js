import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const repoForm = ({ repo, allAuthors, onSave, onChange, saving, errors }) => {
  return (
    <form>
      <h1>Manage repo</h1>
      <TextInput
        name="title"
        label="Title"
        value={repo.title}
        onChange={onChange}
        error={errors.title}
      />

      <SelectInput
        name="authorId"
        label="Author"
        value={repo.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange}
        error={errors.authorId}
      />

      <TextInput
        name="category"
        label="Category"
        value={repo.category}
        onChange={onChange}
        error={errors.category}
      />

      <TextInput
        name="year"
        label="Year"
        value={repo.year}
        onChange={onChange}
        error={errors.year}
      />

      <input
        type="submit"
        disabled={saving}
        value={saving ? "Saving..." : "Save"}
        className="btn btn-primary"
        onClick={onSave}
      />
    </form>
  );
};

repoForm.propTypes = {
  repo: PropTypes.object.isRequired,
  allAuthors: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default repoForm;
