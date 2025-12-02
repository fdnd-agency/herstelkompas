<script>
  const { file_title,file_id,file_name,desc_title,desc_id,desc_name } = $props()

</script>
<fieldset>
    <legend>{file_title}</legend>
    <div>
      <input required type="file" name={file_name} accept="image/*" id={file_id} class="input-file"/>
      <label class="file-label" for={file_id}><span>Upload afbeelding</span></label>
    </div>

    <label class="desc-label">{desc_title}
        <input required type="text" name={desc_name} id={desc_id} class="input-text"/>
    </label>
</fieldset>
<style>


  fieldset{
    border: 0;
    color: var(--primary-color-dark);
    width: fit-content;
    text-align: center;
    margin-top: 2rems;
  }
  legend{
    font-weight: bold;
    font-size: 20px;
    text-align: left;
    margin-bottom: 1rem;
  }
  fieldset div{
    position: relative;
        position: relative;
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  label.desc-label{
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 1rem;
    font-weight: bold;
    gap: .3rem;
  }
  label.desc-label input{
    width: 100%;
    background-color: #DEF0FC;
    border: 3px solid var(--primary-color-dark);
    border-radius: 10px;
    height: 3rem;
    color: var(--primary-color-dark);
    padding: .5rem;
    &:focus-visible{
      border-style: dashed;
      outline: none;
    }
  }
  

</style>