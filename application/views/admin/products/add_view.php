<div class="wrapper wrapper-content animated fadeInRight ecommerce">

    <div class="row">
      <div class="col-lg-12">
        <div class="tabs-container">

          <ul class="nav nav-tabs">
              <li><a class="nav-link active" data-toggle="tab" href="#tab-1"> Product info</a></li>
              <li><a class="nav-link" data-toggle="tab" href="#tab-2"> Data</a></li>
              <li><a class="nav-link" data-toggle="tab" href="#tab-3"> Discount</a></li>
              <li><a class="nav-link" data-toggle="tab" href="#tab-4"> Images</a></li>
          </ul>

          <div class="tab-content">

            <div id="tab-1" class="tab-pane active">
                <div class="panel-body">
                    <form method="post" action="<?= site_url('admin/products/save_product_info'); ?>">
                      <fieldset>
                        <div class="form-group row"><label class="col-sm-2 col-form-label">Name:</label>
                            <div class="col-sm-10"><input type="text" class="form-control" placeholder="Product name" name="name"></div>
                        </div>
                        <div class="form-group row"><label class="col-sm-2 col-form-label">Price:</label>
                            <div class="col-sm-10"><input type="text" class="form-control" placeholder="$00.00" name="price"></div>
                        </div>
                        <div class="form-group row"><label class="col-sm-2 col-form-label">Description:</label>
                            <div class="col-sm-10">
                                <textarea class="summernote" name="description">
                                    <h3>Lorem Ipsum is simply</h3>
                                    dummy text of the printing and typesetting industry. <strong>Lorem Ipsum has been the industry's</strong> standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                                    <br/>
                                </textarea>
                            </div>
                        </div>
                        <div class="form-group row"><label class="col-sm-2 col-form-label">Meta Tag Title:</label>
                            <div class="col-sm-10"><input type="text" class="form-control" placeholder="..." name="meta_tag_title"></div>
                        </div>
                        <div class="form-group row"><label class="col-sm-2 col-form-label">Meta Tag Description:</label>
                            <div class="col-sm-10"><input type="text" class="form-control" placeholder="..." name="meta_tag_description"></div>
                        </div>
                        <div class="form-group row"><label class="col-sm-2 col-form-label">Meta Tag Keywords:</label>
                            <div class="col-sm-10"><input type="text" class="form-control" placeholder="..." name="meta_tag_keywords"></div>
                        </div>
                      </fieldset>
                      <button class="btn btn-primary btn-sm" type="submit">Save changes</button>
                  </form>
                </div><!-- /panel-body -->
            </div><!-- /#tab-1 -->

            <div id="tab-2" class="tab-pane">
                <div class="panel-body">

                    <fieldset>
                        <div class="form-group row"><label class="col-sm-2 col-form-label">ID:</label>
                            <div class="col-sm-10"><input type="text" class="form-control" placeholder="543"></div>
                        </div>
                        <div class="form-group row"><label class="col-sm-2 col-form-label">Model:</label>
                            <div class="col-sm-10"><input type="text" class="form-control" placeholder="..."></div>
                        </div>
                        <div class="form-group row"><label class="col-sm-2 col-form-label">Location:</label>
                            <div class="col-sm-10"><input type="text" class="form-control" placeholder="location"></div>
                        </div>
                        <div class="form-group row"><label class="col-sm-2 col-form-label">Tax Class:</label>
                            <div class="col-sm-10">
                                <select class="form-control" >
                                    <option>option 1</option>
                                    <option>option 2</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row"><label class="col-sm-2 col-form-label">Quantity:</label>
                            <div class="col-sm-10"><input type="text" class="form-control" placeholder="Quantity"></div>
                        </div>
                        <div class="form-group row"><label class="col-sm-2 col-form-label">Minimum quantity:</label>
                            <div class="col-sm-10"><input type="text" class="form-control" placeholder="2"></div>
                        </div>
                        <div class="form-group row"><label class="col-sm-2 col-form-label">Sort order:</label>
                            <div class="col-sm-10"><input type="text" class="form-control" placeholder="0"></div>
                        </div>
                        <div class="form-group row"><label class="col-sm-2 col-form-label">Status:</label>
                            <div class="col-sm-10">
                                <select class="form-control" >
                                    <option>option 1</option>
                                    <option>option 2</option>
                                </select>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div><!-- /#tab-2 -->

            <div id="tab-3" class="tab-pane">
                <div class="panel-body">

                    <div class="table-responsive">
                        <table class="table table-stripped table-bordered">

                            <thead>
                            <tr>
                                <th>
                                    Group
                                </th>
                                <th>
                                    Quantity
                                </th>
                                <th>
                                    Discount
                                </th>
                                <th style="width: 20%">
                                    Date start
                                </th>
                                <th style="width: 20%">
                                    Date end
                                </th>
                                <th>
                                    Actions
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <select class="form-control" >
                                        <option selected>Group 1</option>
                                        <option>Group 2</option>
                                        <option>Group 3</option>
                                        <option>Group 4</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="text" class="form-control" placeholder="10">
                                </td>
                                <td>
                                    <input type="text" class="form-control" placeholder="$10.00">
                                </td>
                                <td>
                                    <div class="input-group date">
                                        <span class="input-group-addon"><i class="fa fa-calendar"></i></span><input type="text" class="form-control" value="07/01/2014">
                                    </div>
                                </td>
                                <td>
                                    <div class="input-group date">
                                        <span class="input-group-addon"><i class="fa fa-calendar"></i></span><input type="text" class="form-control" value="07/01/2014">
                                    </div>
                                </td>
                                <td>
                                        <button class="btn btn-white"><i class="fa fa-trash"></i> </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <select class="form-control" >
                                        <option selected>Group 1</option>
                                        <option>Group 2</option>
                                        <option>Group 3</option>
                                        <option>Group 4</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="text" class="form-control" placeholder="10">
                                </td>
                                <td>
                                    <input type="text" class="form-control" placeholder="$10.00">
                                </td>
                                <td>
                                    <div class="input-group date">
                                        <span class="input-group-addon"><i class="fa fa-calendar"></i></span><input type="text" class="form-control" value="07/01/2014">
                                    </div>
                                </td>
                                <td>
                                    <div class="input-group date">
                                        <span class="input-group-addon"><i class="fa fa-calendar"></i></span><input type="text" class="form-control" value="07/01/2014">
                                    </div>
                                </td>
                                <td>
                                    <button class="btn btn-white"><i class="fa fa-trash"></i> </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <select class="form-control" >
                                        <option selected>Group 1</option>
                                        <option>Group 2</option>
                                        <option>Group 3</option>
                                        <option>Group 4</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="text" class="form-control" placeholder="10">
                                </td>
                                <td>
                                    <input type="text" class="form-control" placeholder="$10.00">
                                </td>
                                <td>
                                    <div class="input-group date">
                                        <span class="input-group-addon"><i class="fa fa-calendar"></i></span><input type="text" class="form-control" value="07/01/2014">
                                    </div>
                                </td>
                                <td>
                                    <div class="input-group date">
                                        <span class="input-group-addon"><i class="fa fa-calendar"></i></span><input type="text" class="form-control" value="07/01/2014">
                                    </div>
                                </td>
                                <td>
                                    <button class="btn btn-white"><i class="fa fa-trash"></i> </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <select class="form-control" >
                                        <option selected>Group 1</option>
                                        <option>Group 2</option>
                                        <option>Group 3</option>
                                        <option>Group 4</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="text" class="form-control" placeholder="10">
                                </td>
                                <td>
                                    <input type="text" class="form-control" placeholder="$10.00">
                                </td>
                                <td>
                                    <div class="input-group date">
                                        <span class="input-group-addon"><i class="fa fa-calendar"></i></span><input type="text" class="form-control" value="07/01/2014">
                                    </div>
                                </td>
                                <td>
                                    <div class="input-group date">
                                        <span class="input-group-addon"><i class="fa fa-calendar"></i></span><input type="text" class="form-control" value="07/01/2014">
                                    </div>
                                </td>
                                <td>
                                    <button class="btn btn-white"><i class="fa fa-trash"></i> </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <select class="form-control" >
                                        <option selected>Group 1</option>
                                        <option>Group 2</option>
                                        <option>Group 3</option>
                                        <option>Group 4</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="text" class="form-control" placeholder="10">
                                </td>
                                <td>
                                    <input type="text" class="form-control" placeholder="$10.00">
                                </td>
                                <td>
                                    <div class="input-group date">
                                        <span class="input-group-addon"><i class="fa fa-calendar"></i></span><input type="text" class="form-control" value="07/01/2014">
                                    </div>
                                </td>
                                <td>
                                    <div class="input-group date">
                                        <span class="input-group-addon"><i class="fa fa-calendar"></i></span><input type="text" class="form-control" value="07/01/2014">
                                    </div>
                                </td>
                                <td>
                                    <button class="btn btn-white"><i class="fa fa-trash"></i> </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <select class="form-control" >
                                        <option selected>Group 1</option>
                                        <option>Group 2</option>
                                        <option>Group 3</option>
                                        <option>Group 4</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="text" class="form-control" placeholder="10">
                                </td>
                                <td>
                                    <input type="text" class="form-control" placeholder="$10.00">
                                </td>
                                <td>
                                    <div class="input-group date">
                                        <span class="input-group-addon"><i class="fa fa-calendar"></i></span><input type="text" class="form-control" value="07/01/2014">
                                    </div>
                                </td>
                                <td>
                                    <div class="input-group date">
                                        <span class="input-group-addon"><i class="fa fa-calendar"></i></span><input type="text" class="form-control" value="07/01/2014">
                                    </div>
                                </td>
                                <td>
                                    <button class="btn btn-white"><i class="fa fa-trash"></i> </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <select class="form-control" >
                                        <option selected>Group 1</option>
                                        <option>Group 2</option>
                                        <option>Group 3</option>
                                        <option>Group 4</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="text" class="form-control" placeholder="10">
                                </td>
                                <td>
                                    <input type="text" class="form-control" placeholder="$10.00">
                                </td>
                                <td>
                                    <div class="input-group date">
                                        <span class="input-group-addon"><i class="fa fa-calendar"></i></span><input type="text" class="form-control" value="07/01/2014">
                                    </div>
                                </td>
                                <td>
                                    <div class="input-group date">
                                        <span class="input-group-addon"><i class="fa fa-calendar"></i></span><input type="text" class="form-control" value="07/01/2014">
                                    </div>
                                </td>
                                <td>
                                    <button class="btn btn-white"><i class="fa fa-trash"></i> </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div><!-- /#tab-3 -->

            <div id="tab-4" class="tab-pane">
                <div class="panel-body">

                    <div class="table-responsive">
                      <table class="table table-bordered table-stripped">
                          <thead>
                          <tr>
                              <th>
                                  Image preview
                              </th>
                              <th>
                                  Image url
                              </th>
                              <th>
                                  Sort order
                              </th>
                              <th>
                                  Actions
                              </th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <td>
                                  <img src="<?php echo base_url(); ?>img/admin/gallery/2s.jpg">
                              </td>
                              <td>
                                  <input type="text" class="form-control" disabled value="http://mydomain.com/images/image1.png">
                              </td>
                              <td>
                                  <input type="text" class="form-control" value="1">
                              </td>
                              <td>
                                  <button class="btn btn-white"><i class="fa fa-trash"></i> </button>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <img src="<?php echo base_url(); ?>img/admin/gallery/1s.jpg">
                              </td>
                              <td>
                                  <input type="text" class="form-control" disabled value="http://mydomain.com/images/image2.png">
                              </td>
                              <td>
                                  <input type="text" class="form-control" value="2">
                              </td>
                              <td>
                                  <button class="btn btn-white"><i class="fa fa-trash"></i> </button>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <img src="<?php echo base_url(); ?>img/admin/gallery/3s.jpg">
                              </td>
                              <td>
                                  <input type="text" class="form-control" disabled value="http://mydomain.com/images/image3.png">
                              </td>
                              <td>
                                  <input type="text" class="form-control" value="3">
                              </td>
                              <td>
                                  <button class="btn btn-white"><i class="fa fa-trash"></i> </button>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <img src="<?php echo base_url(); ?>img/admin/gallery/4s.jpg">
                              </td>
                              <td>
                                  <input type="text" class="form-control" disabled value="http://mydomain.com/images/image4.png">
                              </td>
                              <td>
                                  <input type="text" class="form-control" value="4">
                              </td>
                              <td>
                                  <button class="btn btn-white"><i class="fa fa-trash"></i> </button>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <img src="<?php echo base_url(); ?>img/admin/gallery/5s.jpg">
                              </td>
                              <td>
                                  <input type="text" class="form-control" disabled value="http://mydomain.com/images/image5.png">
                              </td>
                              <td>
                                  <input type="text" class="form-control" value="5">
                              </td>
                              <td>
                                  <button class="btn btn-white"><i class="fa fa-trash"></i> </button>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <img src="<?php echo base_url(); ?>img/admin/gallery/6s.jpg">
                              </td>
                              <td>
                                  <input type="text" class="form-control" disabled value="http://mydomain.com/images/image6.png">
                              </td>
                              <td>
                                  <input type="text" class="form-control" value="6">
                              </td>
                              <td>
                                  <button class="btn btn-white"><i class="fa fa-trash"></i> </button>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <img src="<?php echo base_url(); ?>img/admin/gallery/7s.jpg">
                              </td>
                              <td>
                                  <input type="text" class="form-control" disabled value="http://mydomain.com/images/image7.png">
                              </td>
                              <td>
                                  <input type="text" class="form-control" value="7">
                              </td>
                              <td>
                                  <button class="btn btn-white"><i class="fa fa-trash"></i> </button>
                              </td>
                          </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
            </div><!-- /#tab-4 -->

          </div><!-- /tab-content -->

        </div><!-- /tabs-container -->
      </div><!-- /col-lg-12 -->
    </div><!-- /row -->
    
</div><!-- /wrapper-content -->