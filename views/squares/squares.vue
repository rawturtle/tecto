<template>
    <section class="view home">
        <section class="app-wrapper cs:fwh">
            <!--When adding a new section give the outer container a height of 90vh. The header has a set height of 10vh-->
            <!-- mobile section -->
            <mobile-entry></mobile-entry>
            <!-- End mobile section -->
            <app-header></app-header>
            <!--<home-page></home-page>-->
            <!--<welcome-page></welcome-page>-->

            <section id="bookings-section" class="bookings-desktop component ct:hori cs:fwh mb:cv:hide">
                <section class="ct:vert cs:2/3 cs:fwh">
                    <section class="cs:1/8 cs:fw"></section>
                    <section class="cs:6/8 cs:fw ct:hori">
                        <div class="contact-form">
                        <form>
                            <h3>Want to host an event?</h3>
                            <h4>Innov8HQ has all the facilities you need. Send Heidi a message by filling out the form below</h4>
                            <fieldset>
                                <input v-model="state.name" type="text" id="name" placeholder="Name" tabindex="1" required>
                            </fieldset>
                            <fieldset>
                                <input v-model="state.email" type="email" id="email" placeholder="Email" tabindex="2" required>
                            </fieldset>
                            <fieldset>
                                <input v-model="state.phone" type="text" id="phone" placeholder="Phone Number (Optional)" tabindex="3">
                            </fieldset>
                            <fieldset id="half-width">
                                <no-ssr>
                                    <datepicker v-model="state.date" id="datepicker" tabindex="4"></datepicker>
                                </no-ssr>
                            </fieldset>
                            <fieldset>

                            </fieldset>
                            <fieldset>
                                <textarea placeholder="Additional comments" tabindex="5"></textarea>
                            </fieldset>

                            <fieldset>
                                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                            </fieldset>
                            <!--<p>{{ state.name }}</p>-->
                            <!--<p>{{ state.email }}</p>-->
                            <!--<p>{{ state.phone }}</p>-->
                            <!--<p>{{ state.date }}</p>-->
                        </form>
                        </div>
                    </section>
                    <section class="cs:1/8 cs:fw"></section>

                </section>

                <section class="details ct:vert cs:1/3 cs:fwh">
                    <section class="cs:1/5 cs:fw"></section>
                    <section class="cs:1/5 cs:fw">
                        <div class="contact-info">
                            <p>We are in the process of implementing a fully automated booking system so bear with us.
                            </p>
                            <p>In the meantime use the form and Heidi will get back to you or call her directly</p>
                        </div>
                    </section>
                    <section class="cs:1/5 cs:fw"></section>
                    <section class="cs:2/5 cs:fw">
                        <div class="contact-details ca:left">
                            <h3>Contact Heidi</h3>
                            <p>Phone: codasdgndfkjgdfg</p>
                            <p>Email: asfkjbf@jkszsgbskjdfg</p>
                            <p>Address: 123 Vogel Str33t</p>
                        </div>
                    </section>
                </section>

            </section>


        </section>
    </section>
</template>
