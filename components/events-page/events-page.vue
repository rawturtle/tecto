<template>
    <section id="bookings-section" class="bookings-desktop component ct:hori cs:fwh mb:cv:hide">
        <section class="ct:vert cs:1/2 cs:fwh">
            <section class="cs:1/8 cs:fw"></section>
            <section class="cs:6/8 cs:fwh ct:hori contact-form">
                <form>
                    <h3>Want to host an event?</h3>
                    <h4>Innov8HQ has all the facilities you need. Send Heidi a message by filling out the form below</h4>

                    <div class="item-wrapper">
                        <input v-model="state.name" type="text" id="name" placeholder="Name" tabindex="1" required>
                    </div>

                    <div class="item-wrapper">
                        <input v-model="state.email" type="email" id="email" placeholder="Email" tabindex="2" required>
                    </div>

                    <div class="item-wrapper">
                        <input v-model="state.phone" type="text" id="phone" placeholder="Phone Number (Optional)" tabindex="3">
                    </div>

                    <div class="datetime-wrapper">
                        <div class="wrap ct:hori ca:left">
                            <no-ssr>
                                <datepicker v-model="state.date" id="datepicker" tabindex="4"></datepicker>
                            </no-ssr>
                            <input v-model="state.timeFrom" class="time" type="text" placeholder="From">
                            <input v-model="state.timeTo" class="time" type="text" placeholder="To">
                        </div>
                    </div>

                    <div class="item-wrapper">
                        <textarea placeholder="Additional comments" tabindex="5"></textarea>
                    </div>

                    <div class="item-wrapper">
                        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                    </div>
                </form>
            </section>
            <section class="cs:1/8 cs:fw"></section>
        </section>

        <section class="details ct:vert cs:1/2 cs:fwh">
            <section class="cs:1/8 cs:fw"></section>

            <section class="cs:6/8 ct:vert">

                <section class="cs:1/3 ct:vert">
                    <section class="contact-info ct:vert">
                        <p>We are in the process of implementing a fully automated booking system so bear with us.
                        </p>
                        <p>In the meantime use the form and Heidi will get back to you or call her directly</p>
                    </section>
                </section>

                <section class="cs:gutter"></section>

                <section class="cs:1/3 ct:vert">
                    <section class="contact-info ct:vert">
                        <p>We are in the process of implementing a fully automated booking system so bare with us.
                        </p>
                        <p>In the meantime use the form and Heidi will get back to you or call her directly</p>
                    </section>
                </section>

                <section class="cs:gutter"></section>

                <section class="cs:1/3 ct:vert">
                    <section class="contact-info ct:vert">
                        <p>We are in the process of implementing a fully automated booking system so beer with us.
                        </p>
                        <p>In the meantime use the form and Heidi will get back to you or call her directly</p>
                    </section>
                </section>

            </section>
            <section class="cs:1/8 cs:fw"></section>
        </section>

    </section>

</template>